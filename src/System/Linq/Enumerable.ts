import assert from 'assert'
import { Errors } from '../Core/Errors'

export class Enumerable {

	public static Aggregate<TSource>(source: TSource[], func: Func2<TSource, TSource, TSource>) : TSource
	public static Aggregate<TSource, TAccumulate>(source: TSource[], seed: TAccumulate, func: Func2<TAccumulate, TSource, TAccumulate>) : TAccumulate
	public static Aggregate<TSource, TAccumulate, TResult>(source: TSource[], seed: TAccumulate, func: Func2<TAccumulate, TSource, TAccumulate>, resultSelector: Func1<TAccumulate, TResult>) : TResult
	public static Aggregate<TSource, TAccumulate, TResult>(source: TSource[], seed: TAccumulate, func?: Func2<TAccumulate, TSource, TAccumulate>, resultSelector?: Func1<TAccumulate, TResult>) : TResult {
		if (!source) throw Errors.ArgumentNull('source')
		if (arguments.length === 2 && seed instanceof Function)
			[seed, func] = [undefined as unknown as TAccumulate, seed as unknown as Func2<TAccumulate, TSource, TAccumulate>]
		if (!func) throw Errors.ArgumentNull('func')
		if (!resultSelector) resultSelector = e => e as unknown as TResult

		let result = seed === undefined ? source[0] as unknown as TAccumulate : seed
		// @ts-ignore
		source.forEach(e => result = func(result, e))
		return resultSelector(result)
	}

	public static All<TSource>(source: TSource[], func: Func1<TSource, boolean>) {
		if (!source) throw Errors.ArgumentNull('source')
		if (!func) throw Errors.ArgumentNull('func')
		return source.every(func)
	}

	public static Any<TSource>(source: TSource[]) : boolean
	public static Any<TSource>(source: TSource[], func: Func1<TSource, boolean>) : boolean
	public static Any<TSource>(source: TSource[], func?: Func1<TSource, boolean>) {
		if (!source) throw Errors.ArgumentNull('source')
		if (!func) return !!source.length
		return source.some(func)
	}

	public static Append<TSource>(sourc: TSource[], element: TSource) {
		
	}


	public static GroupBy<TSource, TKey>(source: TSource[], keySelector: Func1<TSource, TKey>) : [TKey, TSource[]][] {
		const result = new Map<TKey, TSource[]>()
		let key: TKey
		source.forEach(e => {
			key = keySelector(e)
			if (result.has(key))
				result.get(key)?.push(e)
			else
				result.set(key, [e])
		})
		return Array.from(result.entries())
	}

	public static Max<TSource, TKey = TSource>(source: TSource[], selector?: Func1<TSource, TKey>) : TSource | TKey {
		assert.ok(source, 'need source')
		if (selector) return this.Max(source.map(selector))

		let result = undefined as unknown as TSource, flag = false
		source.forEach(e => {
			if (flag) {
				if (e < result)
					result = e
			} else {
				result = e
				flag = true
			}
		})
		return result
	}


	public static Sum<TSource>(source: TSource[], selector?: Func1<TSource, number>) : number {
		assert.ok(source, 'need source')
		if (selector) return this.Sum(source.map(selector))

		return source.reduce((p, e) => p + (e as any), typeof(source[0]) === 'number' ? 0 : '')
	}


}
