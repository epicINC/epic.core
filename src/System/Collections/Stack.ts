import { EnumerableHelpers } from './EnumerableHelpers'


export class Stack<T = any> {
	private array: T[]

	constructor(collection?: ArrayLike<T>) {
		this.array = collection ? EnumerableHelpers.ToArray(collection) : []
	}

	get Count() {
		return this.array.length
	}

	Contains(item: T) : boolean {
		return !!this.array.length  && this.array.includes(item)
	}

	Peek() {
		return this.array[this.Count - 1]
	}

	Pop() {
		return this.array.pop()
	}

	Push(item: T) {
		this.array.push(item)
		return this
	}

	ToArray() {
		return this.array.slice()
	}

	Clear() {
		this.array.length = 0
		return this
	}
}