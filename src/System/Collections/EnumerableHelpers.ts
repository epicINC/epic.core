

export class EnumerableHelpers {
	static ToArray<T>(data: ArrayLike<T>) : T[] {
		return Array.isArray(data) ? data.slice() : Array.from(data)
	}
}