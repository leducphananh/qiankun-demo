export interface CurrentUser {
  id: number;
  name: string;
  email: string;
}

export interface UserAppProps {
  user: CurrentUser | null;
  theme: 'light' | 'dark';
  onLogout: () => void;
}
