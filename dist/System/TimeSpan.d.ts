declare namespace System {
    const InternalTicks: unique symbol;
    class TimeSpan implements IComparable<TimeSpan>, IEquatable<TimeSpan>, IFormattable {
        [InternalTicks]: number;
        constructor(ticks: number);
        readonly Days: number;
        readonly Hours: number;
        readonly Minutes: number;
        readonly Seconds: number;
        readonly Milliseconds: number;
        readonly Ticks: number;
        readonly TotalDays: number;
        readonly TotalHours: number;
        readonly TotalMinutes: number;
        readonly TotalSeconds: number;
        readonly TotalMilliseconds: number;
        CompareTo(value: TimeSpan): 1 | -1 | 0;
        Equals(value: TimeSpan): boolean;
        ToString(format: string, formatProvider: IFormatProvider): string;
        static Interval(value: number, scale: number): TimeSpan;
        static FromDays(value: number): TimeSpan;
        static FromHours(value: number): TimeSpan;
        static FromSeconds(value: number): TimeSpan;
        static FromMilliseconds(value: number): TimeSpan;
    }
}
declare interface Date {
    Subtract: (value: Date) => System.TimeSpan;
}
