import type { CurrentUser, Permission } from "@demo/contracts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: CurrentUser | null;
  permissions: Permission[];
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      permissions: [],
      isAuthenticated: false,

      login: async (email: string) => {
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Mock user data
        const mockUser: CurrentUser = {
          id: Math.floor(Math.random() * 1000),
          name:
            email.split("@")[0].charAt(0).toUpperCase() +
            email.split("@")[0].slice(1),
          email,
          avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(email.split("@")[0])}&background=0D8ABC&color=fff`,
        };

        // Determine permissions (mock logic)
        const mockPermissions: Permission[] =
          email === "admin@demo.com"
            ? [
                "user:read",
                "user:create",
                "user:update",
                "user:delete",
                "order:read",
                "order:create",
              ]
            : ["order:read"];

        set({
          user: mockUser,
          permissions: mockPermissions,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({
          user: null,
          permissions: [],
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-storage", // stores state in localStorage
    },
  ),
);
