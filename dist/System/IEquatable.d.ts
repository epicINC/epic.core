declare namespace System {
    interface IEquatable<T> {
        Equals(other: T): boolean;
    }
}
