


function pad(text: number, length: number) {
	return text.toString().padStart(length, '0')
}

const locals = {

	'zh-cn': {
		abbampmdesignator: ['晨', '夕'],
		ampmdesignator: ['上午', '下午'],

		abbmonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
		months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],

		abbweeks: ['日', '一', '二', '三', '四', '五', '六'],
		shortWeeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		weeks: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		year: '年',
		month: '月',
		day: '日',

		bc: '公元前',
		ad: '公元',

		shortSpecifier: {
			'd': 'yyyy/m/d',
			'D': `yyyy${this}`
		}
	}
}


Date.prototype.format = function (format: string, lng = 'zh-cn') {
	const local = locals[lng]
	// let cache = {}
	return format.replace(/((y+)|(M+)|(d+)|(h+)|(H+)|(m+)|(s+)|(t+)|(z+)|(f+)|(F+))/g, (substring: string, ...args: any[]) => {
		const len = substring.length
		switch (substring[0]) {
			case 'y':
				if (len > 3) return pad(this.getFullYear(), len)
				return pad(this.getFullYear() % 100, len)
			case 'M':
				if (len === 1) return this.getMonth() + 1
				if (len === 2) return pad(this.getMonth() + 1, 2)
				if (len === 3) return local.abbmonths[this.getMonth()]
				if (len === 4) return local.months[this.getMonth()]
			case 'd':
				if (len === 1) return this.getDate()
				if (len === 2) return pad(this.getDate(), 2)
				if (len === 3) return local.abbweeks[this.getDay()]
				if (len === 4) return local.weeks[this.getDay()]
			case 'h':
				if (len === 1) return this.getHours() % 12
				if (len === 2) return pad(this.getHours() % 12, 2)
			case 'H':
				if (len === 1) return this.getHours()
				if (len === 2) return pad(this.getHours(), 2)
			case 'm':
				if (len === 1) return this.getMinutes()
				if (len === 2) return pad(this.getMinutes(), 2)
			case 's':
				if (len === 1) return this.getSeconds()
				if (len === 2) return pad(this.getSeconds(), 2)
			case 't':
				if (len === 1) return local.abbampmdesignator[this.getHours() > 12 ? 1 : 0]
				if (len === 2) return local.ampmdesignator[this.getHours() > 12 ? 1 : 0]
			case 'z':
				let
					timezoneOffset = this.getTimezoneOffset(),
					negative: string
				if (timezoneOffset > 0 )
					negative = '-'
				else {
					negative = '+'
					timezoneOffset *= -1
				}
				if (len === 1) return negative + CalcTimeoffsetHour(timezoneOffset)
				if (len === 2) return negative + pad(CalcTimeoffsetHour(timezoneOffset), 2)
				if (len === 3) return negative + pad(CalcTimeoffsetHour(timezoneOffset), 2) + ':' + pad(CalcTimeoffsetMinute(timezoneOffset % 60), 2)
			case 'f':
				if (len === 1) return Math.floor(this.getMilliseconds() / 100)
				if (len === 2) return pad(Math.floor(this.getMilliseconds() / 10), 2)
				if (len === 3) return pad(Math.floor(this.getMilliseconds()), 3)
			case 'F':
				if (len === 1) return ZeroOrEmpty(this.getMilliseconds() / 100, 1)
				if (len === 2) return ZeroOrEmpty(this.getMilliseconds() / 10, 2)
				if (len === 3) return ZeroOrEmpty(this.getMilliseconds(), 3)
				case 'g':
				case 'G':
					// period or era
					return ''
			default:
				return substring
		}
	})
}


function CalcTimeoffsetHour(value: number) {
	return Math.floor(value / 60)
}
function CalcTimeoffsetMinute(value: number) {
	return Math.floor(value % 60)
}

function ZeroOrEmpty(value: number, length: number) {
	if (value === 0) return ''
	return pad(Math.floor(value), length)

}

const StandardDateandTimeFormatSpecifier = {
	'd': 'yyyy/M/d'
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
//       M | m: June 15
//       O | o: 2008-06-15T21:15:07.0000000
//       R : r: Sun, 15 Jun 2008 21:15:07 GMT
//       s: 2008-06-15T21:15:07
//       t: 9:15 PM
//       T: 9:15:07 PM
//       u: 2008-06-15 21:15:07Z
//       U: Monday, June 16, 2008 4:15:07 AM
//       Y | y: June, 2008
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