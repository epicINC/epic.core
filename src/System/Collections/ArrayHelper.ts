


export class ArrayHelper {

	static Merge<T = any>(src: Array<T>, dest: Array<T>) {
		return this.CopyTo(src, src.length, dest, 0, dest.length)
	}


	static CopyTo<T = any>(src: Array<T>, srcOffset: number, dest: Array<T>, destOffset: number, count: number) {
		for(let i = 0; i < count; i++)
			src[srcOffset + i] = dest[destOffset + i]
		return src
	}
}
