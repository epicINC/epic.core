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

	public static All<TSource>(source: TSource[], func: Predicate<TSource>) {
		if (!source) throw Errors.ArgumentNull('source')
		if (!func) throw Errors.ArgumentNull('func')
		return source.every(func)
	}


	public static Any<TSource>(source: TSource[]) : boolean
	public static Any<TSource>(source: TSource[], func: Predicate<TSource>) : boolean
	public static Any<TSource>(source: TSource[], func?: Predicate<TSource>) : boolean {
		if (!source) throw Errors.ArgumentNull('source')
		if (!func) return !!source.length
		return source.some(func)
	}


	public static Append<TSource>(source: TSource[], element: TSource) {
		return [...source, element]
	}


	public static Average(source: number[]) : number
	public static Average<TSource>(source: TSource[], selector: Func1<TSource, number>) : number
	public static Average<TSource>(source: TSource[], selector?: Func1<TSource, number>) : number {
		if (!source) throw Errors.ArgumentNull('source')
		if (selector) return this.Average(source.map(selector))
		if (source.length) return 0
		return this.Sum(this.Cast<number>(source)) / source.length
	}

	public static Cast<TResult>(source: any[]) {
		return source as TResult[]
	}

	public static Concat<TSource>(first: TSource[], second: TSource[]) {
		if (!first) throw Errors.ArgumentNull('first')
		if (!second) throw Errors.ArgumentNull('second')
		return first.concat(second)
	}


	public static Contains<TSource>(source: TSource[], value: TSource) : boolean
	public static Contains<TSource>(source: TSource[], value: TSource, comparer: EqualityComparer<TSource>) : boolean
	public static Contains<TSource>(source: TSource[], value: TSource, comparer?: EqualityComparer<TSource>) : boolean {
		if (!source) throw Errors.ArgumentNull('source')
		if (!comparer) return source.includes(value)
		return this.Any(source, e => comparer(e, value))
	}

	public static Count<TSource>(source: TSource[]) : number
	public static Count<TSource>(source: TSource[], predicate: Predicate<TSource>) : number
	public static Count<TSource>(source: TSource[], predicate?: Predicate<TSource>) : number {
		if (!source) throw Errors.ArgumentNull('source')
		if (!predicate) return source.length
		let result = 0
		source.forEach(e => predicate(e) && (result++))
		return result
	}


	public static DefaultIfEmpty<TSource>(source: TSource[], defaultValue: TSource = null as unknown as TSource) {
		if (!source) throw Errors.ArgumentNull('source')
		return source.length ? source : [defaultValue]
	}

	public static Distinct<TSource>(source: TSource[]) : TSource[]
	public static Distinct<TSource>(source: TSource[], comparer: EqualityComparer<TSource>) : TSource[]
	public static Distinct<TSource>(source: TSource[], comparer?: EqualityComparer<TSource>) : TSource[] {
		if (!source) throw Errors.ArgumentNull('source')
		if (!source.length || source.length === 1) return source
		if (!comparer) return Array.from(new Set(source))
		
		const result = [source[0]]
		for (let item of source) {
			if (this.Contains(result, item, comparer)) continue
			result.push(item)
		}
		return result
	}


	public static ElementAt<TSource>(source: TSource[], index: number) : TSource {
		if (!source) throw Errors.ArgumentNull('source')
		if (index < 0 || index >= source.length) throw Errors.ArgumentOutOfRange('index')
		return source[index]
	}

	public static ElementAtOrDefault<TSource>(source: TSource[], index: number) : TSource {
		if (!source) throw Errors.ArgumentNull('source')
		if (index < 0 || index >= source.length) return null as unknown as TSource
		return source[index]
	}


	public static Empty<TResult>() {
		return new Array<TResult>()
	}


	public static Except<TSource>(first: TSource[], second: TSource[]) : TSource[]
	public static Except<TSource>(first: TSource[], second: TSource[], comparer: EqualityComparer<TSource>) : TSource[]
	public static Except<TSource>(first: TSource[], second: TSource[], comparer?: EqualityComparer<TSource>) : TSource[] {
		if (!first) throw Errors.ArgumentNull('first')
		if (!second) throw Errors.ArgumentNull('second')

		if (!comparer) {
			const set = new Set(second), result = []
			for (let item of first) {
				if (set.has(item)) continue
				set.add(item)
				result.push(item)
			}
			return result
		}

		const set = this.Distinct(second, comparer), result = []
		for (let item of first) {
			if (this.Contains(set, item, comparer)) continue
			set.push(item)
			result.push(item)
		}

		return result
	}

	public static Fisrt<TSource>(source: TSource[]) : TSource
	public static Fisrt<TSource>(source: TSource[], predicate: Predicate<TSource>) : TSource
	public static Fisrt<TSource>(source: TSource[], predicate?: Predicate<TSource>) : TSource {
		if (!source) throw Errors.ArgumentNull('source')
		if (!predicate) return source[0]
		for (let item of source) {
			if (predicate(item)) return item
		}
		throw Errors.NotMatch()
	}


	public static FisrtOrDefault<TSource>(source: TSource[]) : TSource
	public static FisrtOrDefault<TSource>(source: TSource[], predicate: Predicate<TSource>) : TSource
	public static FisrtOrDefault<TSource>(source: TSource[], predicate?: Predicate<TSource>) : TSource {
		if (!source) throw Errors.ArgumentNull('source')
		if (!predicate) return source[0]
		for (let item of source) {
			if (predicate(item)) return item
		}
		return null as unknown as TSource
	}


	public static GroupBy1<TSource, TKey>(source: TSource[], keySelector: Func1<TSource, TKey>) : [TKey, TSource[]][] {
		if (!source) throw Errors.ArgumentNull('source')

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

	public static GroupBy<TSource, TKey, TResult>(source: TSource[], keySelector: Func1<TSource, TKey>, resultSelector: Func2<TKey, TSource[], TResult>, comparer: EqualityComparer<TKey>) : TResult[]
	public static GroupBy<TSource, TKey, TElement, TResult>(source: TSource[], keySelector: Func1<TSource, TKey>, elementSelector?: Func1<TSource, TElement>, resultSelector?: Func2<TKey, TElement[], TResult>, comparer?: EqualityComparer<TKey>) : TResult[] {
		if (!source) throw Errors.ArgumentNull('source')

		if (!elementSelector) elementSelector = (e) => e as unknown as TElement
		if (!resultSelector) resultSelector = (e, k) => [e, k] as unknown as TResult
		if (!comparer) comparer = (first, second) => first === second

		let key: TKey, value: TElement, index: number
		const keys: TKey[] = [], values: TElement[][] = []
		for (let item of source) {
			key = keySelector(item), value = elementSelector(item), index = keys.findIndex(e => comparer(key, e))
			if (index !== -1) {
				values[index].push(value)
				continue
			}
			keys.push(key)
			values.push([value])
		}

		const result: TResult[] = []
		for (let i = 0; i < keys.length; i++)
			result.push(resultSelector(keys[i], values[i]))
		
		return result
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

	public static Sum(source: number[]) : number
	public static Sum<TSource>(source: TSource[], selector?: Func1<TSource, number>) : number {
		assert.ok(source, 'need source')
		if (selector) return this.Sum(source.map(selector))

		return source.reduce((p, e) => p + (e as any), typeof(source[0]) === 'number' ? 0 : '')
	}


}

