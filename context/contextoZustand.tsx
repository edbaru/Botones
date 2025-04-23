import { create,  } from 'zustand'

interface BearState {
    items: number[];
    aumentar: () => void;
    reducir: () => void;
};

export const useContext = create<BearState>()((set) => ({
    items: [],
    aumentar: () => set((state) => ({ ...state.items.push})),
    reducir: () => set((state) => ({ ...state.items.pop }))
}))