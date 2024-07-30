export type TypeCodeStore = {
	name: string
	email: string
	username: string
	message: string
	setName: (arg: string) => void
	setEmail: (arg: string) => void
	setUsername: (arg: string) => void
	setMessage: (arg: string) => void
}
