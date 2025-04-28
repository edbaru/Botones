import { create, } from 'zustand'

interface BearState {
    items: number[];
    aumentar: () => void;
    reducir: () => void;
};

export const useStore = create<BearState>()((set) => ({
    items: [],
    aumentar: () => set((state) => ({ items: [...state.items, state.items.length + 1] })),
    reducir: () => set((state) => ({ items: state.items.slice(0, -1) }))
}))