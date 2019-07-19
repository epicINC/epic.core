import { EnumerableHelpers } from './EnumerableHelpers'

// ref: https://github.com/dotnet/corefx/blob/master/src/System.Collections/src/System/Collections/Generic/Queue.cs
export class Queue<T = any> {
	private array: T[]
	
	constructor(collection?: ArrayLike<T>) {
		this.array = collection ? EnumerableHelpers.ToArray(collection) : []
	}

	get Count() {
		return this.array.length
	}

	Enqueue(item: T) {
		this.array.push(item)
		return this
	}

	Dequeue() {
		return this.array.shift()
	}

	Peek() {
		return this.array[0]
	}

	Contains(item: T) : boolean {
		return !!this.array.length && this.array.includes(item)
	}

	ToArray() : T[] {
		return this.array.slice()
	}

	Clear() {
		this.array.length = 0
		return this
	}
}