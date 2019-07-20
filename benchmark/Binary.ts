import Benchmark from 'benchmark';
const suite = new Benchmark.Suite






let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];


suite.add('Distinct#Binary', () => {
	Binary1(exampleArray)
})
.add('Distinct#Set', () => {

	return Array.from(new Set(exampleArray))

})
.on('cycle', function(event: Benchmark.Event) {
	console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
	console.log('Fastest is ' + (this.filter('fastest') as any).map('name'));
})
.run({ 'async': true });
