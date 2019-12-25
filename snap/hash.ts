
function hashCode(value: string) {
	const buffer = Buffer.from(value, 'utf8')
	let hash1 = 5381n, hash2 = 371851769n

	for(let i = 0; i < buffer.length; i ++)
		hash1 = ((hash1 << 5n) + hash1) ^ BigInt(buffer[i])

	return BigInt.asIntN(32, hash1 + hash2)
}

function hashCode1(value: string) {
	const buffer = Buffer.from(value, 'utf8')
	let hash1 = 5381, hash2 = 371851769

	for(let i = 0; i < buffer.length; i ++)
		hash1 = ((hash1 << 5) + hash1) ^ buffer[i]

	return hash1 + hash2
}

function hashCode2(s: string) {
	for(var i = 0, h = 0; i < s.length; i++)
			h = Math.imul(31, h) + s.charCodeAt(i) | 0;
	return h;
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

const str = 'test'

console.log(hashCode(str))
console.log(hashCode1(str))
console.log(hashCode2(str) )
console.log(stringHashCode(str))