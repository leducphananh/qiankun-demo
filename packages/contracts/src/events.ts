import type { AppTheme } from './micro-app';

export interface AppEvents {
  'user.updated': {
    id: number;
    name: string;
    email: string;
  };

  'user.logged-out': undefined;

  'theme.changed': {
    theme: AppTheme;
  };

  'order.created': {
    id: number;
    total: number;
  };
}
