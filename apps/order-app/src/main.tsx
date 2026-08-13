import type { OrderAppProps } from "@demo/contracts";
import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  qiankunWindow,
  renderWithQiankun,
  type QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.tsx";
import "./index.css";

let root: Root | null = null;

function render(
  props: OrderAppProps = {
    user: null,
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
      <BrowserRouter basename="/orders">
        <App user={props.user ?? null} />
      </BrowserRouter>
    </StrictMode>,
  );
}

renderWithQiankun({
  mount(props: QiankunProps) {
    console.log("[order-app] mount");

    let isRendered = false;

    if (props.onGlobalStateChange) {
      props.onGlobalStateChange((state: Partial<OrderAppProps>) => {
        render({
          ...props,
          user: state.user,
        } as unknown as OrderAppProps);
        isRendered = true;
      }, true);
    }

    if (!isRendered) {
      render(props as unknown as OrderAppProps);
    }
  },
  bootstrap() {
    console.log("[order-app] bootstrap");
  },
  unmount() {
    console.log("[order-app] unmount");
    root?.unmount();
    root = null;
  },
  update(props: QiankunProps) {
    console.log("[order-app] update", props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
