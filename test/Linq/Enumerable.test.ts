/// <reference types="../../src/types" />

import { Enumerable } from '../../src/System/Linq'

// year
test('Enumerable.Except', () => {
	const data1 = [1, 2, 3], data2 = [2, 3, 4], expected = [1]
	expect(Enumerable.Except(data1, data2)).toStrictEqual(expected)
})
