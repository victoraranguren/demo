import { create } from "zustand";

const useStore = create((set) => ({
  session: false,
  setSession: set({ session: true }),
}));

export { useStore };
