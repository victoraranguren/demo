import { create } from "zustand";

export const useStore = create((set, get) => {
  return {
    session: null,

    setSession: (session) => {
      set({ session });
    },
  };
});
