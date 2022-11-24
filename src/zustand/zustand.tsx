import create from 'zustand'
interface store {
    count: number,
    bebr: string,
    beb: VoidFunction,
    setBeb: (beeb: string) => void,
    inc: (state?: number) => void,
    dec: (state?: number) => void,
    dep: (num: number) => void,
    noDep: (how: number) => void
}

const useStore = create<store>((set, get) => ({
    count: 1,
    bebr: '',
    beb: () => set({ bebr: get().bebr + ' beb' }),
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
    dep: (num) => set((state) => ({ count: state.count + num })),
    noDep: (how) => set((state) => ({ count: state.count - how })),
    setBeb: (beeb) => set({ bebr: get().bebr + beeb }),
}))


export default useStore;