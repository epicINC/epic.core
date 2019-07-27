


class RadixAlgorithm {
	static chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'
	static charsMap: Map<string, number>

	static init() {
		this.charsMap = new Map()
		for (let i = 0; i < this.chars.length; i++)
			this.charsMap.set(this.chars[i], i)
	}
	static to(value: number, radix: number) {
		if (!this.charsMap) this.init();

		let qutient = +value, result = [], mod
	 	do {
	    mod = qutient % radix
	    qutient = (qutient - mod) / radix
	    result.unshift(this.chars[mod])
	  } while (qutient)

	  return result.join('')
	}

	static from(value: string, radix: number) {
		if (!this.charsMap) this.init()

		let text = String(value), count = text.length, i = 0, result = 0
		while (i < count)
		  result += Math.pow(radix, i++) * (this.charsMap[text.charAt(count - i)] || 0)
		return result
	}
}



export class NumberHelper {
	static toString(value: number, radix: number) {
		if (radix >= 2 && radix <= 36) return value.toString(radix)
		return RadixAlgorithm.to(value, radix)
	}

	static Parse(value: string, radix: number) {
		if (radix >= 2 && radix <= 36) return parseInt(value, radix)
		return RadixAlgorithm.from(value, radix)
	}


}