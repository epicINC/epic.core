


export class Errors {
	public static ArgumentNull(paramName: string) : ArgumentNullException {
		return new ArgumentNullException(paramName)
	}
}



export class ArgumentException extends Error {
	private paramName: string

	constructor(paramName?: string, message?: string) {
		super(paramName ?? message ?? '')
		this.paramName = paramName ?? ''
		this.message = message ?? ''
	}

	public get ParamName() {
		return this.paramName
	}

	public get Message() {
		return this.message
	}

}


export class ArgumentNullException extends ArgumentException {

	constructor(paramName?: string, message?: string) {
		super(paramName, message)
	}
}