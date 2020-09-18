
function GroupBy<TSource, TKey>(source: TSource[], keySelector: Func1<TSource, TKey>) : [TKey, TSource[]][]
function GroupBy<TSource, TKey, TElement, TResult>(source: TSource[], keySelector: Func1<TSource, TKey>, {elementSelector, resultSelector, comparer}: IGroupByParameter<TSource, TKey, TElement, TResult>) : TResult[]
function GroupBy<TSource, TKey, TElement, TResult>(source: TSource[], keySelector: Func1<TSource, TKey>, {elementSelector, resultSelector, comparer} : IGroupByParameter<TSource, TKey, TElement, TResult> = null) : TResult[] {
	return []
}


function callTest() {
	const data = ['1', '2', '3']
	GroupBy(data, e => e)
}


interface IGroupByParameter<TSource, TKey, TElement, TResult> {
	elementSelector?: Func1<TSource, TElement>
	resultSelector?: Func2<TKey, TSource[], TResult>
	comparer?: EqualityComparer<TKey>
}