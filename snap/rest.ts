type Func<TResult> = () => TResult
type Func1<T, TResult> = (arg: T) => TResult
type Func2<T1, T2, TResult> = (arg1: T1, arg2: T2) => TResult
type Func3<T1, T2, T3, TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult
type Func4<T1, T2, T3, T4, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult
type Func5<T1, T2, T3, T4, T5, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult
type Func6<T1, T2, T3, T4, T5, T6, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => TResult
type Func7<T1, T2, T3, T4, T5, T6, T7, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => TResult
type Func8<T1, T2, T3, T4, T5, T6, T7, T8, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => TResult
type Func9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => TResult

type EqualityComparer<T1, T2 = T1> = (arg1: T1, arg2: T2) => boolean


function GroupBy<TSource, TKey, TElement, TResult>(source: TSource[], keySelector: Func1<TSource, TKey>, {elementSelector, resultSelector, comparer} : IGroupByParameter<TSource, TKey, TElement, TResult>) : TResult[] {
	
	return []
}


function callTest() {
	const data = ['1', '2', '3']
	GroupBy(data, e => e, {})
}


interface IGroupByParameter<TSource, TKey, TElement, TResult> {
	elementSelector?: Func1<TSource, TElement>
	resultSelector?: Func2<TKey, TSource[], TResult>
	comparer?: EqualityComparer<TKey>
}