import Benchmark from 'benchmark'


function generate() {
	return ['test', '6e3017d6-353b-4a2e-8639-cb0885186046', '6e3017d6-353b-4a2e-8639-cb08851860466e3017d6-353b-4a2e-8639-cb08851860466e3017d6-353b-4a2e-8639-cb08851860466e3017d6-353b-4a2e-8639-cb08851860466e3017d6-353b-4a2e-8639-cb08851860466e3017d6-353b-4a2e-8639-cb08851860466e3017d6-353b-4a2e-8639-cb0885186046']
}


const suite = new Benchmark.Suite('System.Array#Distinct')
const samples = generate()


suite.add('hashcode#short#big int', () => {
	BigInthashCode(samples[1])
})
.add('hashcode#short#normal', () => {
	NormalhashCode(samples[1])
})
.add('hashcode#short#Math.charCodeAt', () => {
	MathCharCodeAthashCode(samples[1])
})
.add('hashcode#short#Math.buffer', () => {
	MatchhashCode(samples[1])
})
.add('hashcode#short#string', () => {
	stringHashCode(samples[1])
})
.on('cycle', function(event: Benchmark.Event) {
	console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
	console.log('Fastest is ' + (this.filter('fastest') as any).map('name'));
})
.run({ 'async': true })	

function BigInthashCode(value: string) {
	const buffer = Buffer.from(value, 'utf8')
	let hash1 = 5381n, hash2 = 371851769n

	for(let i = 0; i < buffer.length; i ++)
		hash1 = ((hash1 << 5n) + hash1) ^ BigInt(buffer[i])

	return BigInt.asIntN(32, hash1 + hash2)
}

function NormalhashCode(value: string) {
	const buffer = Buffer.from(value, 'utf8')
	let hash1 = 5381, hash2 = 371851769

	for(let i = 0; i < buffer.length; i ++)
		hash1 = ((hash1 << 5) + hash1) ^ buffer[i]

	return hash1 + hash2
}

function MathCharCodeAthashCode(s: string) {
	let h = 0
	for(let i = 0; i < s.length; i++)
			h = Math.imul(31, h) + s.charCodeAt(i);
	return h;
}

function MatchhashCode(s: string) {
	const buffer = Buffer.from(s)
	let h = 0
	for(let i = 0; i < buffer.length; i++)
		h = Math.imul(31, h) ^ buffer[i]
	return h
}

function stringHashCode(value: string) {

	const buffer = Buffer.from(value)
	let hash1 = 5381, hash2 = hash1, hash3: number
	for(let i = 0; i < buffer.length; i++) {
		hash3 = buffer[i++]
		hash1 = ((hash1 << 5) + hash1) ^ hash3
		hash3 = buffer[i++]
		if (hash3 === undefined) break
		hash2 = ((hash2 << 5) + hash2) ^ hash3
	}
	return hash1 + hash2 * 1566083941
}