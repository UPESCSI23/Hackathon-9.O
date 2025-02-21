import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (userData) => set({ user: userData }),
      logout: () => {
        set({ user: null });
        localStorage.removeItem("userStore"); // Ensure persisted state is cleared
      },
    }),
    {
      name: "userStore", // Storage key for local persistence
    },
  ),
);

export default useUserStore;
