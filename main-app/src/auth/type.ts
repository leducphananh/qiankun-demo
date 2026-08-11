export interface CurrentUser {
  id: number;
  name: string;
  email: string;
}

export interface AuthState {
  user: CurrentUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}
