import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import {
  qiankunWindow,
  renderWithQiankun,
  type QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.tsx";
import "./index.css";
import type { UserAppProps } from "./types/qiankun.ts";

let root: Root | null = null;

function render(
  props: UserAppProps = {
    user: null,
    accessToken: null,
    onLogout: () => console.log("[user-app] logout"),
  },
) {
  const { container } = props;

  const mountNode = container
    ? container.querySelector("#root")
    : document.querySelector("#root");

  if (!mountNode) {
    throw new Error("Root element not found");
  }

  if (!root) {
    root = createRoot(mountNode);
  }

  root.render(
    <StrictMode>
      <App user={props.user} onLogout={props.onLogout} />
    </StrictMode>,
  );
}

renderWithQiankun({
  mount(props: QiankunProps) {
    console.log("[user-app] mount");

    let isRendered = false;

    if (props.onGlobalStateChange) {
      props.onGlobalStateChange((state: Partial<UserAppProps>) => {
        render({
          ...props,
          user: state.user,
          accessToken: state.accessToken,
        } as unknown as UserAppProps);
        isRendered = true;
      }, true);
    }

    if (!isRendered) {
      render(props as unknown as UserAppProps);
    }
  },
  bootstrap() {
    console.log("[user-app] bootstrap");
  },
  unmount() {
    console.log("[user-app] unmount");
    root?.unmount();
    root = null;
  },
  update(props: QiankunProps) {
    console.log("[user-app] update", props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
