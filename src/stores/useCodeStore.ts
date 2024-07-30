import { TypeCodeStore } from '@/types/stores.type'
import { create } from 'zustand'

export const useCodeStore = create<TypeCodeStore>(set => ({
	name: '',
	email: '',
	username: '',
	message: '',
	setName: state => set({ name: state }),
	setEmail: state => set({ email: state }),
	setMessage: state => set({ message: state }),
	setUsername: state => set({ username: state }),
}))
