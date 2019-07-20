
export class Task {
	static async Delay (ts = 500) {
		return new Promise(resolve => setTimeout(resolve, ts))
	}
}