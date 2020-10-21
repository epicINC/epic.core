

export function noop<TResult>() : TResult
export function noop<T, TResult>(arg: T) : TResult
export function noop<T1, T2, TResult>(arg1: T1, arg2: T2) : TResult
export function noop<T1, T2, T3, TResult>(arg1: T1, arg2: T2, arg3: T3) : TResult
export function noop<T1, T2, T3, T4, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4) : TResult
export function noop<T1, T2, T3, T4, T5, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) : TResult
export function noop<T1, T2, T3, T4, T5, T6, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) : TResult
export function noop<T1, T2, T3, T4, T5, T6, T7, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) : TResult
export function noop<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) : TResult
export function noop<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) : TResult
export function noop<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(arg1?: T1, arg2?: T2, arg3?: T3, arg4?: T4, arg5?: T5, arg6?: T6, arg7?: T7, arg8?: T8, arg9?: T9) : TResult {
	return undefined as unknown as TResult
}



export class Delegate {
	static Selector<T, P extends Indexable>(selector: P | Func1<T, P>) {
		if (typeof(selector) === 'function') return selector
		return (e: T) => e[selector as any]
	}


	private static set<T, K extends keyof T>(target: T, key: K, value: T[K]) {
		target[key] = value
	}
}