import { Errors } from '../Core/Errors'
import { Dictionary } from '../Collections'
import { IGrouping } from './Enumerable'

export class Lookup<TKey, TElement> {
	private comparer: EqualityComparer<TKey>
	private dict: Dictionary<TKey, IGrouping<TKey, TElement>>
	private defaultKeyGrouping: IGrouping<TKey, TElement>

	private constructor (comparer?: EqualityComparer<TKey>) {
		this.comparer = comparer as unknown as EqualityComparer<TKey>
		this.dict = new Dictionary<TKey, IGrouping<TKey, TElement>>(comparer)
	}


	static Create<TSource, TKey, TElement>(source: TSource[], keySelector: Func1<TSource, TKey>, elementSelector: Func1<TSource, TElement>, comparer?: EqualityComparer<TKey>) {
		if (!source) throw Errors.ArgumentNull('source')
		if (!keySelector) throw Errors.ArgumentNull('keySelector')
		if (!elementSelector) throw Errors.ArgumentNull('elementSelector')

	}


	get Count() {
		let result = this.dict.Count
		if (!this.defaultKeyGrouping) return result
		return result++
	}

	Contains(key: TKey) : boolean {
		if (key !== undefined) return this.dict.ContainsKey(key)
		return !!this.defaultKeyGrouping
	}

	GetGrouping(key: TKey, create: boolean) : TElement[] {
		if (this.comparer)
	}




}