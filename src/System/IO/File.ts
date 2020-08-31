import fs from 'fs'



export class File {
	static Exists(path: string) : boolean {
		try {
			return fs.existsSync(path)
		} catch {
			return false
		}
	}

}