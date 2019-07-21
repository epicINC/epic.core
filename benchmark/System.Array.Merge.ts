/// <reference types="../src/types" />

import Benchmark from 'benchmark'
import {ArrayHelper} from '../src/System/Collections/ArrayHelper' 


function generate() {
	return [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
}


const push = Array.prototype.push
const suite = new Benchmark.Suite('System.Array#Merge')

suite.add('System.Array#Merge', () => {
	let src = generate(), dest = generate()
	ArrayHelper.Merge(src, dest)
})
.add('Array.concat', () => {
	let src = generate(), dest = generate()
	src.concat(dest)
})
.add('Array.push', () => {
	let src = generate(), dest = generate()
	push.apply(src, dest)
})
.add('Array.push rest', () => {
	let src = generate(), dest = generate()
	src.push(...dest)
})
.on('cycle', function(event: Benchmark.Event) {
	console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
	console.log('Fastest is ' + (this.filter('fastest') as any).map('name'));
})
.run({ 'async': true })	
