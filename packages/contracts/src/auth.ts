export interface CurrentUser {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
}

export type Permission =
  | 'user:read'
  | 'user:create'
  | 'user:update'
  | 'user:delete'
  | 'order:read'
  | 'order:create';
