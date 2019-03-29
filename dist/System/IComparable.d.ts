declare namespace System {
    interface IComparable<T = any> {
        CompareTo(other: T): number;
    }
}
