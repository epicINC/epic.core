
import {ArrayHelper} from '../src/System/Collections/ArrayHelper'


test('ArrayHelper: Merge', () => {
	let src = [1,2,3,4], dest = [5,6,7,8], expected = src.concat(dest)
	let received = ArrayHelper.Merge(src, dest)
	expect(received).toStrictEqual(expected)
})

test('ArrayHelper: CopyTo', () => {
	let src = [1,2,3,4], dest = [4,5,6,7], expected = [1,2,3,5,6]
	let received = ArrayHelper.CopyTo(src, 3, dest, 1, 2)
	expect(received).toStrictEqual(expected)
})