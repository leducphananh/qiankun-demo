export interface CurrentUser {
  id: number;
  name: string;
  email: string;
}

export interface OrderAppProps {
  container?: HTMLElement;
  user: CurrentUser | null;
}
