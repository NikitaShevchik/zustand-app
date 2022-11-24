import create from 'zustand'

interface store {
    count: number,
    inc: (state?: number) => void,
    dec: (state?: number) => void,
    dep: (num: number) => void,
    noDep: (how: number) => void
}

export const useStore = create<store>((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
    dep: (num) => set((state) => ({ count: state.count + num })),
    noDep: (how) => set((state) => ({ count: state.count - how }))
}))

// function Controls() {
//     const inc = useStore(state => state.inc)
//     return <button onClick={inc}>one up</button>
// }

// function Counter() {
//     const count = useStore(state => state.count)
//     return <h1>{count}</h1>
// }