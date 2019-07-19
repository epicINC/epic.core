import { TimeSpan } from '../Core/TimeSpan'
import { IFormatProvider } from '../Core/IFormatProvider'


export enum Pattern {
	None,
	Minimum,
	Full
}

export class TimeSpanFormat {
	
	static Format(value: TimeSpan, format: string, formatProvider: IFormatProvider) {
		if (!format) format = 'c'
		if (format.length === 1) {
			switch(format[0]) {
				case 'T':
				case 'c':
				case 't':
					return TimeSpanFormat.FormatStandard(value, true, format, Pattern.Minimum)
				case 'G':
				case 'g':
					return ''
			}
		}
		return ''
	}

	static FormatStandard(value: TimeSpan, isInvariant: boolean, format: string, pattern: Pattern) {
		return ''
	}

}

