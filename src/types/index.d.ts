
	interface Date {
		Subtract: (value: Date) => TimeSpan
	}




type Many<T> = T | T[]

type Deferred<T> = {
		[P in keyof T]: Promise<T[P]>
}

type Proxify<T> = {
		[P in keyof T]: { get() : T[P]; set(v: T[P]) : void }
}
type Predicate<T> = (item: T) => boolean

type Action0 = () => void
type Action1<T> = (arg: T) => void
type Action2<T1, T2> = (arg1: T1, arg2: T2) => void
type Action3<T1, T2, T3> = (arg1: T1, arg2: T2, arg3: T3) => void
type Action4<T1, T2, T3, T4> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void
type Action5<T1, T2, T3, T4, T5> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void
type Action6<T1, T2, T3, T4, T5, T6> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void
type Action7<T1, T2, T3, T4, T5, T6, T7> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => void
type Action8<T1, T2, T3, T4, T5, T6, T7, T8> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => void

type Func0<TResult> = () => TResult
type Func1<T, TResult> = (arg: T) => TResult
type Func2<T1, T2, TResult> = (arg1: T1, arg2: T2) => TResult
type Func3<T1, T2, T3, TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult
type Func4<T1, T2, T3, T4, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult
type Func5<T1, T2, T3, T4, T5, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult
type Func6<T1, T2, T3, T4, T5, T6, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => TResult
type Func7<T1, T2, T3, T4, T5, T6, T7, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => TResult
type Func8<T1, T2, T3, T4, T5, T6, T7, T8, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => TResult



declare global {

/*
	interface Action {
			() : void
			<T>(arg: T) : void
			<T1, T2>(arg1: T1, arg2: T2) : void
			<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3) : void
			<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4) : void
			<T1, T2, T3, T4, T5>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) : void
			<T1, T2, T3, T4, T5, T6>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) : void
			<T1, T2, T3, T4, T5, T6, T7>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) : void
			<T1, T2, T3, T4, T5, T6, T7, T8>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) : void
	}

	interface Func {
			<TResult>() : TResult
			<T, TResult>(arg: T) :  TResult
			<T1, T2, TResult>(arg1: T1, arg2: T2) : TResult
			<T1, T2, T3, TResult>(arg1: T1, arg2: T2, arg3: T3) : TResult
			<T1, T2, T3, T4, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4) : TResult
			<T1, T2, T3, T4, T5, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) : TResult
			<T1, T2, T3, T4, T5, T6, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) : TResult
			<T1, T2, T3, T4, T5, T6, T7, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) : TResult
			<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) : TResult
	}
*/



	function Funx<TResult>() : TResult
	function Funx<T, TResult>(arg: T) : TResult
	function Funx<T1, T2, TResult>(arg1: T1, arg2: T2) : TResult

}
