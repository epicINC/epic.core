import { TimeSpan } from "../TimeSpan";
import { IFormatProvider } from "../IFormatProvider";
export declare enum Pattern {
    None = 0,
    Minimum = 1,
    Full = 2
}
export declare class TimeSpanFormat {
    static Format(value: TimeSpan, format: string, formatProvider: IFormatProvider): string;
    static FormatStandard(value: TimeSpan, isInvariant: boolean, format: string, pattern: Pattern): string;
}
