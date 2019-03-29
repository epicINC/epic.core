namespace System {


	export interface IComparable<T = any> {
		CompareTo(other: T) : number
	}
	
}