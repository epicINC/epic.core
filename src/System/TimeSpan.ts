



namespace System {

	export const InternalTicks = Symbol('TimeSpan.InternalTicks')

	export class TimeSpan implements IComparable<TimeSpan>,  IEquatable<TimeSpan>, IFormattable {

		[InternalTicks]: number

		constructor (ticks: number) {
			this[InternalTicks] = ticks
		}
	
		get Days() {
			return Math.floor(this[InternalTicks] / 86400000)
		}
	
		get Hours() {
			return Math.floor(this[InternalTicks] / 3600000 % 24)
		}

		get Minutes() {
			return Math.floor(this[InternalTicks] / 60000 % 60)
		}

		get Seconds() {
			return Math.floor(this[InternalTicks] / 1000 % 60)
		}
	
		get Milliseconds () {
			return  this[InternalTicks] % 1000
		}
	
		get Ticks() {
			return this[InternalTicks]
		}

		
		get TotalDays() {
			return this[InternalTicks] * 1.1574074074074074E-8
		}
	
		get TotalHours() {
			return this[InternalTicks] * 2.7777777777777777E-7
		}
	
		get TotalMinutes() {
			return this[InternalTicks] * 1.6666666666666667E-05
		}
	
		get TotalSeconds() {
			return this[InternalTicks] * 1E-03
		}
	
		get TotalMilliseconds() {
			return this[InternalTicks]
		}

		CompareTo(value: TimeSpan) {
			if (this[InternalTicks] > value[InternalTicks]) return 1
			if (this[InternalTicks] < value[InternalTicks]) return -1
			return 0
		}

		Equals(value: TimeSpan) {
			return this[InternalTicks] === value[InternalTicks]
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
	


}

declare interface Date {
	Subtract: (value: Date) => System.TimeSpan;
}
Date.prototype.Subtract = function (value: Date) {
	return new System.TimeSpan(this.valueOf() - value.valueOf())
}	


const start = new Date('2019/3/21 00:00:00')
const end = new Date('2019/3/22 23:59:59')
const ticks = end.Subtract(start)
console.log(ticks.Days)
