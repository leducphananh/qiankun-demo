import type { AppEvents } from "@demo/contracts";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { on } from "./events/event-bus";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OrderApp from "./pages/OrderApp";
import UserApp from "./pages/UserApp";
import { useAuthStore } from "./stores/authStore";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default function App() {
  const handleUserUpdated = (user: AppEvents["user.updated"]) => {
    console.log("[main-app] User updated:", user);
  };
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    const off = on("user.updated", handleUserUpdated);

    return () => {
      off();
    };
  }, []);

  return (
    <MainLayout>
      <Routes>
        {/* Public Route */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />

        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/*"
          element={
            <PrivateRoute>
              <UserApp />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders/*"
          element={
            <PrivateRoute>
              <OrderApp />
            </PrivateRoute>
          }
        />
      </Routes>
    </MainLayout>
  );
}
