const
objecToString = Object.prototype.toString,
cache = new Map()

export namespace epic {

	export class Fluent<T> {

		data: T
		constructor (data: T) {
			this.data = data
		}


	}
		
	/**
	 * typeof ex
	 * result: 'undefined', 'null', 'object', 'number', 'string', 'array', 'function', 'symbol', 'date', 'regexp', 'error'
	 *
	 * @access public
	 * @param {Object} val
	 * @return {string}
	 */
	export function type(val: any) : string {
		let key: string
		return val === null ? 'null'
			: val === undefined ? 'undefined'
			: Array.isArray(val) ? 'array'
			: cache.get(key = typeof(val))
			|| (key = typeof val) !== 'object' ? !cache.set(key, key) || key
			: cache.get(key = objecToString.call(val))
			|| epic.action(key.slice(8, -1).toLowerCase(), e => cache.set(key, e))
	}


	export function action<T>(val: T, fn?: (e: T) => void) {
		if (fn) fn(val)
		return val
	}

	export function func<T, K>(val: T, fn?: (e: T) => K) {
		if (!fn) return val
		return fn(val)
	}

	export function each<T, K>(val: T|T[], fn: (e: T) => void) {
		Array.isArray(val) ? val.forEach(fn) : fn(val)
		return val;
	}

	export function map<T, K>(val: T, fn: (e: T) => K) {
		return Array.isArray(val) ? val.map(fn) : fn(val)
	}
}

