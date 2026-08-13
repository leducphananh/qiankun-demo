import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { on } from "./events/event-bus";
import type { AppEvents } from "./events/events";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import OrderApp from "./pages/OrderApp";
import UserApp from "./pages/UserApp";

export default function App() {
  const handleUserUpdated = (user: AppEvents["user.updated"]) => {
    console.log("[main-app] User updated:", user);
  };

  useEffect(() => {
    const off = on("user.updated", handleUserUpdated);

    return () => {
      off();
    };
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<UserApp />} />
        <Route path="/orders/*" element={<OrderApp />} />
      </Routes>
    </MainLayout>
  );
}
