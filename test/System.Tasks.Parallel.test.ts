import {Parallel} from '../src/System/Tasks/Parallel'
import {Task} from '../src/System/Tasks/Task'

test('System.Tasks.Parallel: For', async () => {
	const
		numCPUs = require('os').cpus().length,
		count = 12,
		step = 2,
		delay = 200,
		expected = Array.from(Array(count).keys()),
		hrstart = process.hrtime()

	let received = await Parallel.For(0, count, async (i: number) => {
		await Task.Delay(Math.random() * delay)
		return i
	})
	const hrend = process.hrtime(hrstart)
	expect(received).toStrictEqual(expected)
	expect(hrend[1] / 1000000).toBeLessThan(2 * delay)
})