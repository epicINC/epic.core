/// <reference types="../src/types" />

import Benchmark from 'benchmark'
import {ArrayHelper} from '../src/System/Collections/ArrayHelper' 


function generate() {
	return [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
}

const suite = new Benchmark.Suite('System.Array#Distinct')
const src = generate()

suite.add('System.Array#DistinctBinary', () => {
	ArrayHelper.DistinctBinary(src)
})
.add('System.Array#DistinctSet', () => {
	ArrayHelper.DistinctSet(src)
})
.on('cycle', function(event: Benchmark.Event) {
	console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
	console.log('Fastest is ' + (this.filter('fastest') as any).map('name'));
})
.run({ 'async': true })	


