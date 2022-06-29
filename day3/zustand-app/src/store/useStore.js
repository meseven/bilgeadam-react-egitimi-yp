import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = (set) => ({
  count: 0,
  title: "Test Başlık",
  increase: () => set((state) => ({ count: state.count + 1 })),
  changeTitle: (data) => set(() => ({ title: data })),
});

export default create(
  devtools(
    persist(useStore, {
      name: "CounterStore",
      getStorage: () => sessionStorage,
    })
  )
);
