import * as crypto from 'crypto'
import { BinaryLike } from 'crypto'

export class Hash {
	static create(algorithm: string, data: BinaryLike) : Buffer {
		return crypto.createHash(algorithm).update(data).digest()
	}

	static MD5(data: BinaryLike) : Buffer {
		return this.create('md5', data)
	}

	static SHA1(data: BinaryLike) : Buffer {
		return this.create('sha1', data)
	}

	static SHA256(data: BinaryLike) : Buffer {
		return this.create('sha256', data)
	}

	static SHA384(data: BinaryLike) : Buffer {
		return this.create('sha384', data)
	}

	static SHA512(data: BinaryLike) : Buffer {
		return this.create('sha512', data)
	}

// ref: https://github.com/bombworm/SHA1PRNG
	static SHA1PRNG(seed: string) : Buffer {
		return this.SHA1(this.SHA1(seed)).slice(0, 16)
	}

}
