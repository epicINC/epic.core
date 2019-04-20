



declare global {
	interface Date {
		format(format: string): string
	}

}


function pad(text: number, length: number) {
	return text.toString().padStart(length, '0')
}

const locals = {

	'zh-cn': {
		abbampmdesignator: ['上', '午'],
		ampmdesignator: ['上午', '下午'],

		abbmonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
		months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],

		abbweeks: ['一', '二', '三', '四', '五', '六', '天'],
		weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
	}
}


Date.prototype.format = function (format: string, lng = 'zh-cn') {
	const local = locals[lng]
	//let cache = {}
	return format.replace(/((y+)|(M+)|(d+)|(h+)|(H+)|(m+)|(s+)|(t+)|(z+)|(f+)|(F+))/g, (substring: string, ...args: any[]) => {

		switch (substring[0]) {
			case 'y':
				return pad(this.getFullYear(), substring.length)
			case 'M':
				if (substring.length === 1) return this.getMonth()
				if (substring.length === 2) return pad(this.getMonth(), 2)
				if (substring.length === 3) return local.abbmonths[this.getMonth()]
				if (substring.length === 4) return local.months[this.getMonth()]
			case 'd':
				if (substring.length === 1) return this.getDate()
				if (substring.length === 2) return pad(this.getDate(), 2)
				if (substring.length === 3) return local.abbweeks[this.getDate()]
				if (substring.length === 4) return local.weeks[this.getDate()]
			case 'h':
				if (substring.length === 1) return this.getHours() % 12
				if (substring.length === 2) return pad(this.getHours() % 12, 2)
			case 'H':
				if (substring.length === 1) return this.getHours()
				if (substring.length === 2) return pad(this.getHours(), 2)
			case 'm':
				if (substring.length === 1) return this.getMinutes()
				if (substring.length === 2) return pad(this.getMinutes(), 2)
			case 's':
				if (substring.length === 1) return this.getSeconds()
				if (substring.length === 2) return pad(this.getSeconds(), 2)
			case 't':
				if (substring.length === 1) return local.abbampmdesignator[this.getHours() > 12 ? 1 : 0]
				if (substring.length === 2) return local.ampmdesignator[this.getHours() > 12 ? 1 : 0]
			case 'z':
				const
					timezoneOffset = Math.abs(this.getTimezoneOffset()),
					negative = this.getTimezoneOffset() > 0 ? '-' : ''

				if (substring.length === 1) return negative + Math.floor(timezoneOffset / 60)
				if (substring.length === 2) return negative + pad(Math.floor(timezoneOffset / 60), 2)
				if (substring.length === 3) return negative + pad(Math.floor(timezoneOffset / 60), 2) + ':' + pad(Math.floor(timezoneOffset % 60), 2)
			case 'f':
				if (substring.length === 1) return Math.floor(this.getTime() % 1000 / 100)
				if (substring.length === 2) return pad(Math.floor(this.getTime() % 1000 / 10), 2)
				if (substring.length === 3) return pad(Math.floor(this.getTime() % 1000), 3)
			case 'F':
				if (substring.length === 1) return Math.floor(this.getTime() % 1000 / 100) || ''
				if (substring.length === 2) return Math.floor(this.getTime() % 1000 / 10) || ''
				if (substring.length === 3) return Math.floor(this.getTime() % 1000) || ''
			default:
				break;
		}


		return substring
	})
}


// ref https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings?view=netframework-4.7.2
// https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings?view=netframework-4.7.2
// This example displays the following output to the console:
//       d: 6/15/2008
//       D: Sunday, June 15, 2008
//       f: Sunday, June 15, 2008 9:15 PM
//       F: Sunday, June 15, 2008 9:15:07 PM
//       g: 6/15/2008 9:15 PM
//       G: 6/15/2008 9:15:07 PM
//       m: June 15
//       o: 2008-06-15T21:15:07.0000000
//       R: Sun, 15 Jun 2008 21:15:07 GMT
//       s: 2008-06-15T21:15:07
//       t: 9:15 PM
//       T: 9:15:07 PM
//       u: 2008-06-15 21:15:07Z
//       U: Monday, June 16, 2008 4:15:07 AM
//       y: June, 2008
//
//       'h:mm:ss.ff t': 9:15:07.00 P
//       'd MMM yyyy': 15 Jun 2008
//       'HH:mm:ss.f': 21:15:07.0
//       'dd MMM HH:mm:ss': 15 Jun 21:15:07
//       '\Mon\t\h\: M': Month: 6
//       'HH:mm:ss.ffffzzz': 21:15:07.0000-07:00

/*
const d = new Date()
d.setTime(1554960372000)
console.log(d.getTime())
console.log('result:', d.format('yyyy-MM-dd HH:mm:ss zzz f ff fff'))

*/


export {}