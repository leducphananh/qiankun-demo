export interface CurrentUser {
  id: number;
  name: string;
  email: string;
}

export interface UserAppProps {
  container?: HTMLElement;
  user: CurrentUser | null;
  theme: 'light' | 'dark';
  onLogout: () => void;
}
