declare namespace System {
    interface IFormattable {
        ToString(format: string, formatProvider: IFormatProvider): string;
    }
}
