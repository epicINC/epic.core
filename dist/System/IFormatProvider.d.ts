declare namespace System {
    interface IFormatProvider {
        GetFormat(format: any): object;
    }
}
