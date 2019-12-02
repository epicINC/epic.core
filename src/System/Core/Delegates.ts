export type Predicate<T> = (item: T) => boolean

export type Converter<TInput, TOutput> = (item: TInput) => TOutput

export type Action = () => void
export type Action1<T> = (arg: T) => void
export type Action2<T1, T2> = (arg1: T1, arg2: T2) => void
export type Action3<T1, T2, T3> = (arg1: T1, arg2: T2, arg3: T3) => void
export type Action4<T1, T2, T3, T4> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void
export type Action5<T1, T2, T3, T4, T5> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void
export type Action6<T1, T2, T3, T4, T5, T6> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void
export type Action7<T1, T2, T3, T4, T5, T6, T7> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => void
export type Action8<T1, T2, T3, T4, T5, T6, T7, T8> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => void
export type Action9<T1, T2, T3, T4, T5, T6, T7, T8, T9> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => void

export type Func<TResult> = () => TResult
export type Func1<T, TResult> = (arg: T) => TResult
export type Func2<T1, T2, TResult> = (arg1: T1, arg2: T2) => TResult
export type Func3<T1, T2, T3, TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult
export type Func4<T1, T2, T3, T4, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult
export type Func5<T1, T2, T3, T4, T5, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult
export type Func6<T1, T2, T3, T4, T5, T6, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => TResult
export type Func7<T1, T2, T3, T4, T5, T6, T7, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => TResult
export type Func8<T1, T2, T3, T4, T5, T6, T7, T8, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => TResult
export type Func9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => TResult