/// <reference types="../src/types" />
import Benchmark from 'benchmark'
import  '../src/System'


// 2017-01-03 05:07:09.11
const date1 = new Date(2007, 0, 3, 5, 7, 9, 11)

const options = {
	hourCycle: 'h24',
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
}

const formatter = new Intl.DateTimeFormat("zh-CN", options)

const suite = new Benchmark.Suite('System.DateTime#Format')


suite.add('Intl.DateTimeFormat#Format', () => {
	date1.format('yyyy/MM/dd HH:mm:ss')
})
.add('System.DateTime#Format', () => {
	formatter.format(date1)
})
.on('cycle', function(event: Benchmark.Event) {
	console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
	console.log('Fastest is ' + (this.filter('fastest') as any).map('name'));
})
.run({ 'async': true })	
