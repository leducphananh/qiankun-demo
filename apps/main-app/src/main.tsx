import type { CurrentUser, OrderAppProps, UserAppProps } from "@demo/contracts";
import { initGlobalState, registerMicroApps, start } from "qiankun";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { on } from "./events/event-bus";
import "./index.css";
import { useAuthStore } from "./stores/authStore";

on("user.updated", (updatedUser) => {
  // Update user in Zustand store if they edit profile
  useAuthStore.setState({ user: updatedUser as CurrentUser });
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

const initialAuth = useAuthStore.getState();

const globalState = initGlobalState({
  user: initialAuth.user,
  permissions: initialAuth.permissions,
});

useAuthStore.subscribe((newState) => {
  globalState.setGlobalState({
    user: newState.user,
    permissions: newState.permissions,
  });
});

const userAppProps: UserAppProps = {
  user: initialAuth.user,
  theme: "dark",
  permissions: initialAuth.permissions,
  onLogout: () => {
    useAuthStore.getState().logout();
    console.log("[main-app] User logged out via micro-app");
  },
};

const orderAppProps: OrderAppProps = {
  user: initialAuth.user,
  theme: "dark",
  permissions: initialAuth.permissions,
};

registerMicroApps([
  {
    name: "user-app",
    entry: "//localhost:5174",
    container: "#subapp-container",
    activeRule: "/users",
    props: userAppProps,
  },
  {
    name: "order-app",
    entry: "//localhost:5175",
    container: "#subapp-container",
    activeRule: "/orders",
    props: orderAppProps,
  },
]);

start();
