import { StringHelper } from '../src/System'
import { Collections } from '../src/System'


test('StringHelper: Format', () => {
	let expected = '0,1,0'
	let received = StringHelper.Format('{0},{1},{0}', 0, 1)
	expect(received).toEqual(expected)
})

test('StringHelper: Format length than args', () => {
	let expected = '0,1,{2}'
	let received = StringHelper.Format('{0},{1},{2}', 0, 1)
	expect(received).toEqual(expected)
})

test('StringHelper: Format less than args', () => {
	let expected = '0,1,2'
	let received = StringHelper.Format('{0},{1},{2}', 0, 1, 2, 3, 4)
	expect(received).toEqual(expected)
})