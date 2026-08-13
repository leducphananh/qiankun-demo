import type { CurrentUser } from "@demo/contracts";

export interface AuthState {
  user: CurrentUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}
