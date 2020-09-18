
/**
 *
 *
 * @export
 * @class Enums
 * 
 * @see https://github.com/UselessPickles/ts-enum-util
 */
export class Enums {




	public static getValue<T, K extends keyof T>(target:  T, key: K) : T[K] {
		return target[key]
	}
}
