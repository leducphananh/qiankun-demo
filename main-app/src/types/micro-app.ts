import type { CurrentUser } from '../auth/type';

export interface UserAppProps {
  user: CurrentUser | null;
  accessToken: string | null;
  onLogout: () => void;
}
