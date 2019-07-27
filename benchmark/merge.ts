/// <reference types="../src/types" />

import Benchmark from 'benchmark'
import {ArrayHelper} from '../src/System/Collections/ArrayHelper' 


function generate() {
	return Array.from(Array(50000), (x,i) => i + 1)
}
function generate2() {
	return Array.from(Array(50000), (x,i) => i - 1)
}

const data = [generate(), generate2()]

const push = Array.prototype.push
const suite = new Benchmark.Suite('System.Array#Merge')

suite.add('Array#length', () => {
	let
		src = data[0].slice(),
		dest = data[1].slice(),
		srcLen = src.length,
		destLen = dest.length
	
	src.length = srcLen + destLen

	for(let i = 0; i < destLen; i++)
		src[srcLen + i] = dest[i]
	
})
.add('Array.concat', () => {
	let src = data[0].slice(), dest = data[1].slice()
	src.concat(dest)
})
.add('Array.push', () => {
	let src = data[0].slice(), dest = data[1].slice()
	push.apply(src, dest)
})
.add('Array.push rest', () => {
	let src = data[0].slice(), dest = data[1].slice()
	src.push(...dest)
})
.on('cycle', function(event: Benchmark.Event) {
	console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
	console.log('Fastest is ' + (this.filter('fastest') as any).map('name'));
})
.run({ 'async': true })	
