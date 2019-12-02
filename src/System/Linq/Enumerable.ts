
export class Enumerable {

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
}



