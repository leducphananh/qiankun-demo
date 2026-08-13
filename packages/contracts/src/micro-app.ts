import type { CurrentUser, Permission } from './auth';

export type AppTheme = 'light' | 'dark';

export interface BaseMicroAppProps {
  container?: HTMLElement;
  user?: CurrentUser | null;
  theme?: AppTheme;
  permissions?: Permission[];
}

export interface UserAppProps extends BaseMicroAppProps {
  onLogout?: () => void;
}

export interface OrderAppProps extends BaseMicroAppProps {}
