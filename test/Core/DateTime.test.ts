/// <reference types="../../src/types" />

import  '../../src/System'


const date1 = new Date('2007-01-03T05:07:09')
// 2017-12-23 05:07:09.11
const date2 = new Date(2017, 11, 23, 15, 57, 59, 321)

// year
test('DateTime.Format#y', () => {
	const foramt = 'y'
	expect(date1.format(foramt)).toEqual('7')
	expect(date2.format(foramt)).toEqual('17')
})

test('DateTime.Format#yy', () => {
	const foramt = 'yy'
	expect(date1.format(foramt)).toEqual('07')
	expect(date2.format(foramt)).toEqual('17')
})

test('DateTime.Format#yyy', () => {
	const foramt = 'yyy'
	expect(date1.format(foramt)).toEqual('007')
	expect(date2.format(foramt)).toEqual('017')
})

test('DateTime.Format#yyyy', () => {
	const foramt = 'yyyy'
	expect(date1.format(foramt)).toEqual('2007')
	expect(date2.format(foramt)).toEqual('2017')
})

test('DateTime.Format#yyyyy', () => {
	const foramt = 'yyyyy'
	expect(date1.format(foramt)).toEqual('02007')
	expect(date2.format(foramt)).toEqual('02017')
})

// month
test('DateTime.Format#M', () => {
	const foramt = 'M'
	expect(date1.format(foramt)).toEqual('1')
	expect(date2.format(foramt)).toEqual('12')
})

test('DateTime.Format#MM', () => {
	const foramt = 'MM'
	expect(date1.format(foramt)).toEqual('01')
	expect(date2.format(foramt)).toEqual('12')
})

test('DateTime.Format#MMM', () => {
	const foramt = 'MMM'
	expect(date1.format(foramt)).toEqual('一')
	expect(date2.format(foramt)).toEqual('十二')
})

test('DateTime.Format#MMMM', () => {
	const foramt = 'MMMM'
	expect(date1.format(foramt)).toEqual('一月')
	expect(date2.format(foramt)).toEqual('十二月')
})

// day
test('DateTime.Format#d', () => {
	const foramt = 'd'
	expect(date1.format(foramt)).toEqual('3')
	expect(date2.format(foramt)).toEqual('23')
})
test('DateTime.Format#dd', () => {
	const foramt = 'dd'
	expect(date1.format(foramt)).toEqual('03')
	expect(date2.format(foramt)).toEqual('23')
})

// day of week
test('DateTime.Format#ddd', () => {
	const foramt = 'ddd'
	expect(date1.format(foramt)).toEqual('三')
	expect(date2.format(foramt)).toEqual('六')
})
test('DateTime.Format#dddd', () => {
	const foramt = 'dddd'
	expect(date1.format(foramt)).toEqual('星期三')
	expect(date2.format(foramt)).toEqual('星期六')
})

// hour 12-hour clock from 1 to 12
test('DateTime.Format#h', () => {
	const foramt = 'h'
	expect(date1.format(foramt)).toEqual('5')
	expect(date2.format(foramt)).toEqual('3')
})
test('DateTime.Format#hh', () => {
	const foramt = 'hh'
	expect(date1.format(foramt)).toEqual('05')
	expect(date2.format(foramt)).toEqual('03')
})

// hour 24-hour clock from 0 to 23
test('DateTime.Format#H', () => {
	const foramt = 'H'
	expect(date1.format(foramt)).toEqual('5')
	expect(date2.format(foramt)).toEqual('15')
})
test('DateTime.Format#HH', () => {
	const foramt = 'HH'
	expect(date1.format(foramt)).toEqual('05')
	expect(date2.format(foramt)).toEqual('15')
})

// minute
test('DateTime.Format#m', () => {
	const foramt = 'm'
	expect(date1.format(foramt)).toEqual('7')
	expect(date2.format(foramt)).toEqual('57')
})

test('DateTime.Format#mm', () => {
	const foramt = 'mm'
	expect(date1.format(foramt)).toEqual('07')
	expect(date2.format(foramt)).toEqual('57')
})


// second
test('DateTime.Format#s', () => {
	const foramt = 's'
	expect(date1.format(foramt)).toEqual('9')
	expect(date2.format(foramt)).toEqual('59')
})

test('DateTime.Format#ss', () => {
	const foramt = 'ss'
	expect(date1.format(foramt)).toEqual('09')
	expect(date2.format(foramt)).toEqual('59')
})

// AM/PM
test('DateTime.Format#t', () => {
	const foramt = 't'
	expect(date1.format(foramt)).toEqual('晨')
	expect(date2.format(foramt)).toEqual('夕')
})
test('DateTime.Format#tt', () => {
	const foramt = 'tt'
	expect(date1.format(foramt)).toEqual('上午')
	expect(date2.format(foramt)).toEqual('下午')
})




test('DateTime.Format#f', () => {
	const foramt = 'f'
	expect(date1.format(foramt)).toEqual('0')
	expect(date2.format(foramt)).toEqual('3')
})


test('DateTime.Format#f', () => {
	const foramt = 'f'
	expect(date1.format(foramt)).toEqual('0')
	expect(date2.format(foramt)).toEqual('3')
})


// 1/10 second
test('DateTime.Format#f', () => {
	const foramt = 'f'
	expect(date1.format(foramt)).toEqual('0')
	expect(date2.format(foramt)).toEqual('3')
})

// 1/100 second
test('DateTime.Format#ff', () => {
	const foramt = 'ff'
	expect(date1.format(foramt)).toEqual('00')
	expect(date2.format(foramt)).toEqual('32')
})
// milliseconds
 test('DateTime.Format#fff', () => {
	const foramt = 'fff'
	expect(date1.format(foramt)).toEqual('000')
	expect(date2.format(foramt)).toEqual('321')
})

// none-zero 1/10 second
test('DateTime.Format#F', () => {
	const foramt = 'F'
	expect(date1.format(foramt)).toEqual('')
	expect(date2.format(foramt)).toEqual('3')
})

// none-zero 1/100 second
test('DateTime.Format#FF', () => {
	const foramt = 'FF'
	expect(date1.format(foramt)).toEqual('')
	expect(date2.format(foramt)).toEqual('32')
})
// none-zero milliseconds
 test('DateTime.Format#FFF', () => {
	const foramt = 'FFF'
	expect(date1.format(foramt)).toEqual('')
	expect(date2.format(foramt)).toEqual('321')
})


// Hours offset from UTC
test('DateTime.Format#z', () => {
	const foramt = 'z'
	const
		timezoneOffset = date1.getTimezoneOffset(),
		timeZone = Math.abs(Math.floor(timezoneOffset / 60)),
		negative = timezoneOffset > 0 ? '-' : '+',
		expected = negative + timeZone

	expect(date1.format(foramt)).toEqual(expected)
	expect(date2.format(foramt)).toEqual(expected)
})

// Hours offset from UTC
test('DateTime.Format#zz', () => {
	const foramt = 'zz'
	const
		timezoneOffset = date1.getTimezoneOffset(),
		timeZone = Math.abs(Math.floor(timezoneOffset / 60)),
		negative = timezoneOffset > 0 ? '-' : '+',
		expected = timeZone ? (negative + timeZone.toString().padStart(2, '0')) : ''

	expect(date1.format(foramt)).toEqual(expected)
	expect(date2.format(foramt)).toEqual(expected)
})

// Hours and minutes offset from UTC.
test('DateTime.Format#zzz', () => {
	const foramt = 'zzz'
	const
		timezoneOffset = date1.getTimezoneOffset(),
		timeZone = Math.abs(Math.floor(timezoneOffset / 60)),
		negative = timezoneOffset > 0 ? '-' : '+',
		expected = timeZone ? (negative + timeZone.toString().padStart(2, '0')) +':'+ (Math.abs(timezoneOffset % 60).toString().padStart(2, '0')) : ''
	expect(date1.format(foramt)).toEqual(expected)
	expect(date2.format(foramt)).toEqual(expected)
})
