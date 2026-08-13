import type { CurrentUser } from "@demo/contracts";
import type { AuthState } from "./type";

let state: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
};

export function getAuthState(): AuthState {
  return state;
}

export function login(user: CurrentUser, accessToken: string): void {
  state = {
    user,
    accessToken,
    isAuthenticated: true,
  };

  notify();
}

export function updateUser(user: CurrentUser): void {
  if (state.isAuthenticated && state.user) {
    state = {
      ...state,
      user: { ...state.user, ...user },
    };
    notify();
  }
}

export function logout(): void {
  state = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
  };

  notify();
}

type Listener = (state: AuthState) => void;

const listeners = new Set<Listener>();

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function notify(): void {
  for (const listener of listeners) {
    listener(state);
  }
}
