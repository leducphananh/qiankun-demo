import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { useAuthStore } from "../stores/authStore";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAuthenticated, logout } = useAuthStore();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="selection:bg-brand-primary/30 flex min-h-screen flex-col font-sans">
      {/* Top Navigation Bar - Hidden on Login Page */}
      {!isLoginPage && isAuthenticated && (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-xl">
          <div className="px-container mx-auto flex h-20 max-w-7xl items-center justify-between">
            {/* Logo & Links */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="from-brand-primary to-brand-secondary shadow-brand-primary/20 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr shadow-md">
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
                <NavLink to="/orders">Orders</NavLink>
              </div>
            </div>

            {/* Auth Section */}
            <div>
              <div className="animate-fade-in flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white py-1.5 pr-4 pl-2 shadow-sm">
                  {user?.avatarUrl ? (
                    <img 
                      src={user.avatarUrl} 
                      alt={user.name} 
                      className="h-8 w-8 rounded-full" 
                    />
                  ) : (
                    <div className="from-brand-secondary flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br to-teal-600 text-sm font-bold text-white shadow-inner">
                      {user?.name?.charAt(0) || "U"}
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content Area */}
      <main className={cn(
        "px-container mx-auto flex w-full flex-1 flex-col",
        !isLoginPage && "max-w-7xl py-10"
      )}>
        {children}

        {/* Micro-frontend Container - Hidden on Login Page */}
        {!isLoginPage && isAuthenticated && (
          <div
            id="subapp-container"
            className="mt-4 min-h-125 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
            style={{ display: location.pathname === "/" ? "none" : "block" }}
          />
        )}
      </main>
    </div>
  );
}

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
