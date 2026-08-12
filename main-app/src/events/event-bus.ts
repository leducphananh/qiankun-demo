import type { AppEvents } from "./events";

export function emit<K extends keyof AppEvents>(
  eventName: K,
  detail: AppEvents[K],
): void {
  window.dispatchEvent(new CustomEvent(eventName, { detail }));
}

export function on<K extends keyof AppEvents>(
  eventName: K,
  handler: (detail: AppEvents[K]) => void,
): () => void {
  const listener = (event: Event) => {
    const customEvent = event as CustomEvent<AppEvents[K]>;

    handler(customEvent.detail);
  };

  window.addEventListener(eventName, listener);

  return () => {
    window.removeEventListener(eventName, listener);
  };
}
