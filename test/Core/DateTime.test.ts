/// <reference types="../../src/types" />

import  '../../src/System'


const date1 = new Date('2007-01-03T05:07:09')
// 2017-12-23 05:07:09.11
const date2 = new Date(2017, 11, 23, 15, 57, 59, 321)

// year
test('DateTime.Format#y', () => {
	const format = 'y'
	expect(date1.format(format)).toEqual('7')
	expect(date2.format(format)).toEqual('17')
})

test('DateTime.Format#yy', () => {
	const format = 'yy'
	expect(date1.format(format)).toEqual('07')
	expect(date2.format(format)).toEqual('17')
})

test('DateTime.Format#yyy', () => {
	const format = 'yyy'
	expect(date1.format(format)).toEqual('007')
	expect(date2.format(format)).toEqual('017')
})

test('DateTime.Format#yyyy', () => {
	const format = 'yyyy'
	expect(date1.format(format)).toEqual('2007')
	expect(date2.format(format)).toEqual('2017')
})

test('DateTime.Format#yyyyy', () => {
	const format = 'yyyyy'
	expect(date1.format(format)).toEqual('02007')
	expect(date2.format(format)).toEqual('02017')
})

// month
test('DateTime.Format#M', () => {
	const format = 'M'
	expect(date1.format(format)).toEqual('1')
	expect(date2.format(format)).toEqual('12')
})

test('DateTime.Format#MM', () => {
	const format = 'MM'
	expect(date1.format(format)).toEqual('01')
	expect(date2.format(format)).toEqual('12')
})

test('DateTime.Format#MMM', () => {
	const format = 'MMM'
	expect(date1.format(format)).toEqual('一')
	expect(date2.format(format)).toEqual('十二')
})

test('DateTime.Format#MMMM', () => {
	const format = 'MMMM'
	expect(date1.format(format)).toEqual('一月')
	expect(date2.format(format)).toEqual('十二月')
})

// day
test('DateTime.Format#d', () => {
	const format = 'd'
	expect(date1.format(format)).toEqual('3')
	expect(date2.format(format)).toEqual('23')
})
test('DateTime.Format#dd', () => {
	const format = 'dd'
	expect(date1.format(format)).toEqual('03')
	expect(date2.format(format)).toEqual('23')
})

// day of week
test('DateTime.Format#ddd', () => {
	const format = 'ddd'
	expect(date1.format(format)).toEqual('三')
	expect(date2.format(format)).toEqual('六')
})
test('DateTime.Format#dddd', () => {
	const format = 'dddd'
	expect(date1.format(format)).toEqual('星期三')
	expect(date2.format(format)).toEqual('星期六')
})

// hour 12-hour clock from 1 to 12
test('DateTime.Format#h', () => {
	const format = 'h'
	expect(date1.format(format)).toEqual('5')
	expect(date2.format(format)).toEqual('3')
})
test('DateTime.Format#hh', () => {
	const format = 'hh'
	expect(date1.format(format)).toEqual('05')
	expect(date2.format(format)).toEqual('03')
})

// hour 24-hour clock from 0 to 23
test('DateTime.Format#H', () => {
	const format = 'H'
	expect(date1.format(format)).toEqual('5')
	expect(date2.format(format)).toEqual('15')
})
test('DateTime.Format#HH', () => {
	const format = 'HH'
	expect(date1.format(format)).toEqual('05')
	expect(date2.format(format)).toEqual('15')
})

// minute
test('DateTime.Format#m', () => {
	const format = 'm'
	expect(date1.format(format)).toEqual('7')
	expect(date2.format(format)).toEqual('57')
})

test('DateTime.Format#mm', () => {
	const format = 'mm'
	expect(date1.format(format)).toEqual('07')
	expect(date2.format(format)).toEqual('57')
})


// second
test('DateTime.Format#s', () => {
	const format = 's'
	expect(date1.format(format)).toEqual('9')
	expect(date2.format(format)).toEqual('59')
})

test('DateTime.Format#ss', () => {
	const format = 'ss'
	expect(date1.format(format)).toEqual('09')
	expect(date2.format(format)).toEqual('59')
})

// AM/PM
test('DateTime.Format#t', () => {
	const format = 't'
	expect(date1.format(format)).toEqual('晨')
	expect(date2.format(format)).toEqual('夕')
})
test('DateTime.Format#tt', () => {
	const format = 'tt'
	expect(date1.format(format)).toEqual('上午')
	expect(date2.format(format)).toEqual('下午')
})




test('DateTime.Format#f', () => {
	const format = 'f'
	expect(date1.format(format)).toEqual('0')
	expect(date2.format(format)).toEqual('3')
})


test('DateTime.Format#f', () => {
	const format = 'f'
	expect(date1.format(format)).toEqual('0')
	expect(date2.format(format)).toEqual('3')
})


// 1/10 second
test('DateTime.Format#f', () => {
	const format = 'f'
	expect(date1.format(format)).toEqual('0')
	expect(date2.format(format)).toEqual('3')
})

// 1/100 second
test('DateTime.Format#ff', () => {
	const format = 'ff'
	expect(date1.format(format)).toEqual('00')
	expect(date2.format(format)).toEqual('32')
})
// milliseconds
test('DateTime.Format#fff', () => {
	const format = 'fff'
	expect(date1.format(format)).toEqual('000')
	expect(date2.format(format)).toEqual('321')
})

// none-zero 1/10 second
test('DateTime.Format#F', () => {
	const format = 'F'
	expect(date1.format(format)).toEqual('')
	expect(date2.format(format)).toEqual('3')
})

// none-zero 1/100 second
test('DateTime.Format#FF', () => {
	const format = 'FF'
	expect(date1.format(format)).toEqual('')
	expect(date2.format(format)).toEqual('32')
})
// none-zero milliseconds
test('DateTime.Format#FFF', () => {
	const format = 'FFF'
	expect(date1.format(format)).toEqual('')
	expect(date2.format(format)).toEqual('321')
})


// Hours offset from UTC
test('DateTime.Format#z', () => {
	const format = 'z'
	const
		timezoneOffset = date1.getTimezoneOffset(),
		timeZone = Math.abs(Math.floor(timezoneOffset / 60)),
		negative = timezoneOffset > 0 ? '-' : '+',
		expected = negative + timeZone

	expect(date1.format(format)).toEqual(expected)
	expect(date2.format(format)).toEqual(expected)
})

// Hours offset from UTC
test('DateTime.Format#zz', () => {
	const format = 'zz'
	const
		timezoneOffset = date1.getTimezoneOffset(),
		timeZone = Math.abs(Math.floor(timezoneOffset / 60)),
		negative = timezoneOffset > 0 ? '-' : '+',
		expected = timeZone ? (negative + timeZone.toString().padStart(2, '0')) : ''

	expect(date1.format(format)).toEqual(expected)
	expect(date2.format(format)).toEqual(expected)
})

// Hours and minutes offset from UTC.
test('DateTime.Format#zzz', () => {
	const format = 'zzz'
	const
		timezoneOffset = date1.getTimezoneOffset(),
		timeZone = Math.abs(Math.floor(timezoneOffset / 60)),
		negative = timezoneOffset > 0 ? '-' : '+',
		expected = timeZone ? (negative + timeZone.toString().padStart(2, '0')) + ':' + (Math.abs(timezoneOffset % 60).toString().padStart(2, '0')) : ''
	expect(date1.format(format)).toEqual(expected)
	expect(date2.format(format)).toEqual(expected)
})
