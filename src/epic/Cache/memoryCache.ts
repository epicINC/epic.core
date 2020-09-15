import { noop } from '../fn'
import { Nullable } from '../typed'

type CacheData<T> = {v: T, ttl: number}

export class MemoryCache<K, T> {
	static TTL = 10 * 60 * 1000
	cache: Map<K, CacheData<T>> = new Map()
	selector: Func1<T, K>
	_loader: Func1<K, Promise<Nullable<T>>>
	ensure: Func1<K, Promise<Nullable<T>>>

	constructor (selector: Func1<T, K>)
	constructor (selector: Func1<T, K>, loader?: Func1<K, Promise<T>>) {
		this.selector = selector
		this.loader = loader!
	}

	has(index: K) : boolean {
		return this.cache.has(index)
	}

	get(index: K) : T | undefined {
		const result = this.cache.get(index)
		if (!result) return result
		result.ttl = Date.now() + MemoryCache.TTL
		return result.v
	}

	add(data: T) : T {
		const key = this.selector(data)
		if (key !== null && key !== undefined)
			this.cache.set(key, {v: data, ttl: Date.now() + MemoryCache.TTL})
		this.start()
		return data
	}

	get loader() {
		return this._loader
	}

	set loader(fn: Func1<K, Promise<Nullable<T>>>) {
		if (!fn) {
			this.ensure = noop
			return
		}
		this._loader = fn
		this.ensure = async (index: K) => {
			if (this.has(index)) return this.get(index)
			const result = await this._loader(index)
			if (!result) return result as unknown as T
			return this.add(result)
		}
	}



	remove(index: K) : boolean  {
		return this.cache.delete(index)
	}

	clear() : void {
		this.stop()
		this.cache.clear()
	}

	get count () : number {
		return this.cache.size
	}

	private Interval: NodeJS.Timeout
	private start() {
		if (this.Interval || !this.cache.size) return
		this.Interval = setTimeout(() => {
			const now  = Date.now()
			this.cache.forEach((e, k) => {
				if (e.ttl > now) return
				this.cache.delete(k)
			})
		}, 1000)
	}

	private stop() {
		if (!this.Interval) return
		clearTimeout(this.Interval)
	}

}

