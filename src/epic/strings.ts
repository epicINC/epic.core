export class Strings {
	static IsNull(data: string | undefined | null) : boolean {
		return data === undefined || data === null
	}

	static IsNullOrEmpty(data: string) {
		return data === undefined || data === null || !data.length
	}
}