import { EqualityComparer } from './EqualityComparer'

const Entries = Symbol.for('Dictionary.Entries')
const Insert = Symbol.for('Dictionary.Insert')
const keys = new Set<any>(['Count', 'Keys', 'Values', 'Add', 'ContainsKey', 'ContainsValue', 'Remove', 'Clear', Entries, Insert])

export class Dictionary<TKey, TValue> {
	[Entries]: Map<TKey, TValue>
	[Insert]: (key: TKey, value: TValue, add: boolean) => boolean

	constructor(comparer?: EqualityComparer<TKey>) {

		if (comparer) {

		}


		this[Entries] = new Map()
		this[Insert] = this.Insert
		return new Proxy(this, {
			get: (target, prop, receiver) => keys.has(prop) ? Reflect.get(this, prop) : this[Entries].get(prop as any),
			set: (target, prop, value) => keys.has(prop) ? Reflect.set(target, prop, value) : this[Insert](prop as any, value, false)
		})
	}

	get Count() {
		return this[Entries].size
	}

	get Keys() {
		return this[Entries].keys()
	}

	get Values() {
		return this[Entries].values()
	}

	private Insert(key: TKey, value: TValue, add: boolean) {
		if (add && this[Entries].has(key)) return false
		this[Entries].set(key, value)
		return true
	}

	Add(key: TKey, value: TValue) {
		return this[Insert](key, value, true)
	}

	ContainsKey(key: TKey) : boolean {
		return !!this[Entries].size && this[Entries].has(key)
	}

	ContainsValue(value: TValue) : boolean {
		if (!this[Entries].size) return false

		for (let item of this[Entries].values()) {
			if (value === item) return true
		}
		return false
	}

	Remove(key: TKey) : boolean {
		return this[Entries].delete(key)
	}

	Clear() {
		this[Entries].clear()
		return this
	}
}