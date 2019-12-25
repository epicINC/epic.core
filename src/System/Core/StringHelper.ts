import assert from 'assert'
import { RegexLib } from '../Text/RegularExpressions'

export class StringHelper {
	static Format(format: string, ...args: any[]) : string {
		assert.ok(format, 'format')
		const length = args.length
		if (length === 0) return format

		return format.replace(RegexLib.StringFormat, (match, index) => {
			if (index < length && args[index] !== undefined) return args[index] 
			return match
		})
	}


	

	private static FormatAdv(format: string, ...args: any[]) {
		let i = 0
		return format.replace(/%([a-z]{1})/g, (match, type) => {
			let result
			switch(type) {
				case 's':
					result = args[i]
					break
			}
			i++
			return result !== undefined ? result : match
		}); 
	}
}

