export function readableDate(date: any) {
	return new Date(date).toLocaleTimeString(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	})
}
