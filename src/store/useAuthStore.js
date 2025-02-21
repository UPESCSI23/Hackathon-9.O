import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => {
        set({ isAuthenticated: false });
        localStorage.removeItem("authStore"); // Ensure persisted state is cleared
      },
    }),
    {
      name: "authStore", // This must match the storage key used
    },
  ),
);

export default useAuthStore;
