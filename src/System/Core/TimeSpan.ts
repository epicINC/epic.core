import { IComparable } from './IComparable'
import { IEquatable } from './IEquatable'
import { IFormattable } from './IFormattable'
import { IFormatProvider } from './IFormatProvider'



export class TimeSpan implements IComparable<TimeSpan>,  IEquatable<TimeSpan>, IFormattable {

	private ticks: number

	constructor (ticks: number) {
		this.ticks = ticks
	}

	get Days() {
		return Math.floor(this.ticks / 86400000)
	}

	get Hours() {
		return Math.floor(this.ticks / 3600000 % 24)
	}

	get Minutes() {
		return Math.floor(this.ticks / 60000 % 60)
	}

	get Seconds() {
		return Math.floor(this.ticks / 1000 % 60)
	}

	get Milliseconds () {
		return  this.ticks % 1000
	}

	get Ticks() {
		return this.ticks
	}

	get TotalDays() {
		return this.ticks * 1.1574074074074074E-8
	}

	get TotalHours() {
		return this.ticks * 2.7777777777777777E-7
	}

	get TotalMinutes() {
		return this.ticks * 1.6666666666666667E-05
	}

	get TotalSeconds() {
		return this.ticks * 1E-03
	}

	get TotalMilliseconds() {
		return this.ticks
	}

	CompareTo(value: TimeSpan) {
		if (this.ticks > value.ticks) return 1
		if (this.ticks < value.ticks) return -1
		return 0
	}

	Equals(value: TimeSpan) {
		return this.ticks === value.ticks
	}

	ToString(format: string, formatProvider: IFormatProvider) {
		const totalDays = this.TotalDays
		return `${totalDays > 0 ? totalDays : ''}.${this.Hours}:${this.Minutes}:${this.Seconds}`
	}

	static Interval(value: number, scale: number) {
		return new TimeSpan(value * scale)
	}

	static FromDays(value: number) {
		return TimeSpan.Interval(value, 86400000)
	}

	static FromHours(value: number) {
		return TimeSpan.Interval(value, 3600000)
	}

	static FromSeconds(value: number) {
		return TimeSpan.Interval(value, 60000)
	}

	static FromMilliseconds(value: number) {
		return TimeSpan.Interval(value, 1)
	}
}


if (!Reflect.has(Date.prototype, 'Subtract')) {
	Object.defineProperty(Date.prototype, 'Subtract', {
		writable: true,
		enumerable: false,
		configurable: true,
		value: function (value: Date) {
			return new TimeSpan(this.valueOf() - value.valueOf())
		}
	})
}


/*
Date.prototype.Subtract = function (value: Date) {
	return new System.TimeSpan(this.valueOf() - value.valueOf())
}
*/

/*
const start = new Date('2019/3/21 00:00:00')
const end = new Date('2019/3/22 23:59:59')
const ticks = end.Subtract(start)
console.log(ticks.Days)
*/
