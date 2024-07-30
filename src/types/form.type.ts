import { z, ZodType } from 'zod'

export type TypeForm = {
	name: string
	email: string
	username: string
	message: string
}

export const FormSchema: ZodType<TypeForm> = z.object({
	name: z.string(),
	email: z.string().email(),
	username: z.string(),
	message: z.string(),
})
