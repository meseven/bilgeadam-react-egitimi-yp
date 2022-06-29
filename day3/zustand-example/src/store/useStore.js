import create from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const useStore = (set, get) => ({
  users: [],
  loadData: async (url) => {
    const response = await fetch(url);
    set({ users: await response.json() });
  },
  add: (data) =>
    set((state) => ({ users: [...state.users, { id: uuidv4(), ...data }] })),
  remove: (id) => {
    const cloned = [...get().users];
    const index = cloned.findIndex((user) => user.id === id);
    cloned.splice(index, 1);

    const deletedData = get().users[index];

    set((state) => ({
      users: [...cloned],
      deletedUsers: [...state.deletedUsers, deletedData],
    }));
  },

  deletedUsers: [],
  restore: (id) => {
    const cloned = [...get().deletedUsers];
    const index = cloned.findIndex((user) => user.id === id);

    const restoredData = get().deletedUsers[index];
    cloned.splice(index, 1);

    set((state) => ({
      users: [restoredData, ...state.users],
      deletedUsers: [...cloned],
    }));
  },
});

export default create(devtools(useStore));
