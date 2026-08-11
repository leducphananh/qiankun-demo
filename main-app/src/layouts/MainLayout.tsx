import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuthState, login, logout, subscribe } from "../auth/auth";
import { cn } from "../utils/cn";

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive =
    location.pathname.startsWith(to) &&
    (to !== "/" || location.pathname === "/");

  return (
    <Link
      to={to}
      className={cn(
        "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
        isActive
          ? "bg-blue-50 text-blue-600 shadow-sm"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
      )}
    >
      {children}
    </Link>
  );
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, setAuth] = useState(getAuthState());

  useEffect(() => {
    return subscribe(setAuth);
  }, []);

  const handleLogin = () => {
    login(
      { id: 1, name: "Phan Anh", email: "phananh@example.com" },
      "fake-token",
    );
  };

  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-blue-500/30">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo & Links */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h1 className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-xl font-bold text-transparent">
                Main App
              </h1>
            </div>

            <div className="hidden items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-1.5 md:flex">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/users">Users</NavLink>
            </div>
          </div>

          {/* Auth Section */}
          <div>
            {auth.isAuthenticated ? (
              <div className="animate-fade-in flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white py-1.5 pr-4 pl-2 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-inner">
                    {auth.user?.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {auth.user?.name}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="animate-fade-in rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-10">
        {children}

        {/* Micro-frontend Container */}
        <div
          id="subapp-container"
          className="mt-4 min-h-125 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
        />
      </main>
    </div>
  );
}
