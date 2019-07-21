

type Indexable = number | string | symbol

class Selector {
	static MakeSelector<T = unknown>(selector: Indexable) {
		return (e: T) => e[selector];
	}
}


type BinaryNode<T> = {v: T, l: BinaryNode<T> | null, r: BinaryNode<T> | null}

export class ArrayHelper {

	static Merge<T = unknown>(src: Array<T>, dest: Array<T>) {
		const srcLen = src.length, destLen = dest.length
		src.length = srcLen + destLen

		// Add arr2 items to arr1
		for(let i = 0; i < destLen; i++){
			src[srcLen + i] = dest[i]
		}


		//return this.CopyTo(src, src.length, dest, 0, dest.length)
	}


	// ref: https://dev.to/uilicious/javascript-array-push-is-945x-faster-than-array-concat-1oki
	static CopyTo<T = unknown>(src: Array<T>, srcOffset: number, dest: Array<T>, destOffset: number, count: number) {
		const len = srcOffset + count
		if (len > src.length) src.length = len

		for(let i = 0; i < count; i++)
			src[srcOffset + i] = dest[destOffset + i]
		return src
	}

	static Binary<T>(target: T[], value: T) {
		let low = 0, hight = target.length -1, mid: number
		while(low <= hight) {
			mid = (low + hight) >>> 1
			if (target[mid] < value)
				low = mid + 1
			else if (target[mid] > value)
				hight = mid - 1
			else
				return mid
		}
		return -1
	}
 

	static DistinctSet<T>(target: T[], selector?: Indexable | Func1<T, unknown>) {
		if (!selector) return Array.from(new Set(target))

		const fn = typeof(selector) !== 'function' ? Selector.MakeSelector<T>(selector) : selector

		let set = new Set(), item
		return target.filter(e => {
			item = fn(e)
			return !set.has(item) && set.add(item);
		});
	}

	static DistinctBinary<T>(target: T[]) {
		let
			set = [target[0]],
			bst: BinaryNode<T> = {v:target[0], l: null, r: null}

			for(let i = 1, item: T, uv, root, count = target.length; i < count; i++) {
				item = target[i], root = bst, uv = true
				while(true) {
					if (item > root.v) {
						if (!root.r) {
							root.r = {v: item, l: null, r: null}
							break
						}
						root = root.r
						continue
					}
					if (item < root.v) {
						if (!root.l) {
							root.l = {v: item, l: null, r: null}
							break
						}
						root = root.l
						continue
					}
					uv = false
					break
				}
				if (uv) set.push(item)
			}
			return set
	}
}
