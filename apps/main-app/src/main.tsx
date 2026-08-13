import type { OrderAppProps, UserAppProps } from "@demo/contracts";
import { initGlobalState, registerMicroApps, start } from "qiankun";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { getAuthState, logout, subscribe, updateUser } from "./auth/auth";
import { on } from "./events/event-bus";
import "./index.css";

on("user.updated", (updatedUser) => {
  updateUser(updatedUser);
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

const auth = getAuthState();

const globalState = initGlobalState({
  user: auth.user,
  accessToken: auth.accessToken,
});

subscribe((newState) => {
  globalState.setGlobalState({
    user: newState.user,
    accessToken: newState.accessToken,
  });
});

const userAppProps: UserAppProps = {
  user: auth.user,
  theme: "dark",
  permissions: ["user:read", "user:create"],
  onLogout: () => {
    logout();

    console.log("[main-app] User logged out");
  },
};

const orderAppProps: OrderAppProps = {
  user: auth.user,
  theme: "dark",
  permissions: ["order:read"],
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
