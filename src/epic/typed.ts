export type Nullable<T> = T | null | undefined

export type NonUndefined<T> = T extends undefined ? never : T


type User = {
	id: number
	name: string
}


