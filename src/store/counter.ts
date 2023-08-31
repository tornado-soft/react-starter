import { create } from 'zustand'

interface CounterStore {
  count: number
  increment: (value: number) => void
  decrement: (value: number) => void
}

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,
  increment: (value) => set((state) => ({ count: state.count + value })),
  decrement: (value) => set((state) => ({ count: state.count - value }))
}))
