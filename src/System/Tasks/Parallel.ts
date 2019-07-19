const numCPUs = require('os').cpus().length
import {ArrayHelper} from '../Collections/ArrayHelper'

type Func1<T, TResult> = (arg: T) => TResult
export class Parallel {
	static options = { workers: numCPUs}

	
	static async For<T = any>(from: number, to: number, fn: Func1<number, Promise<T>>) {
		if (to <= from) return
		const result: T[] = [], step = this.options.workers, items: Promise<T>[] = new Array(step)
		let currentStep = 0
		for(let i = from; i < to; i++) {
			//items.push(fn(i))
			items[currentStep++] = fn(i)
			if (currentStep === step) {
				ArrayHelper.Merge(result, await Promise.all(items))
				currentStep = 0
				console.log('run', i)
			}
		}
		console.log('currentStep', currentStep)
		if (currentStep)
			ArrayHelper.Merge(result, await Promise.all(items.slice(0, currentStep)))
			
		return result
	}

	static async Delay (ts = 500) {
		return new Promise(resolve => setTimeout(resolve, ts))
	}
}


async function test() {
	console.log('workers', numCPUs)
	let result = await Parallel.For(0, 12, async (i: number) => {
		await Parallel.Delay(Math.random() * 500)
		return i
	})

	console.log('result', result)
}


test()


