
function hashCode(value: string) {
	const buffer = Buffer.from(value, 'utf8')
	let hash1 = 5381, hash2 = 371851769

	for(let i = 0; i < buffer.length; i ++)
		hash1 = ((hash1 << 5) + hash1) ^ buffer[i]

	return hash1 + hash2
}