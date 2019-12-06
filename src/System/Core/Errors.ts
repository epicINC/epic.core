


export class Errors {
	public static ArgumentNull(paramName: string) : ArgumentNullException {
		return new ArgumentNullException(paramName)
	}

	public static ArgumentOutOfRange(paramName: string) : ArgumentOutOfRangeException {
		return new ArgumentOutOfRangeException(paramName)
	}

	public static NotMatch() {
		return new InvalidOperationException('Not Match')
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

export class SystemException extends Error {

	constructor(message?: string) {
		super(message ?? '')
		this.message = message ?? ''
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


export class ArgumentOutOfRangeException extends ArgumentException {
	
	constructor(paramName?: string, message?: string) {
		super(paramName, message)
	}

}


export class InvalidOperationException extends SystemException {

	constructor(message?: string) {
		super(message)
	}

}