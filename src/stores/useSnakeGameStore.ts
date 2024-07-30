import { create } from 'zustand'

export const useSnakeGameStore = create<TypeSnakeGame>(set => ({
	collectedApples: 0,
	setCollectedApples: state => set({ collectedApples: state }),
}))
