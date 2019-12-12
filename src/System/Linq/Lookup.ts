import { Errors } from '../Core/Errors'

class Lookup<TKey, TElement> {
	private comparer: EqualityComparer<TKey>
	private constructor (comparer?: EqualityComparer<TKey>) {
		this.comparer = comparer as unknown as EqualityComparer<TKey>
	}


	static Create<TSource, TKey, TElement>(source: TSource[], keySelector: Func1<TSource, TKey>, elementSelector: Func1<TSource, TElement>, comparer?: EqualityComparer<TKey>) {
		if (!source) throw Errors.ArgumentNull('source')
		if (!keySelector) throw Errors.ArgumentNull('keySelector')
		if (!elementSelector) throw Errors.ArgumentNull('elementSelector')

	}



	GetGrouping(key: TKey, create: boolean) : TElement[] {
		if (this.comparer)
	}




}