import { Link, Route, Routes } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Profile from "./pages/Profile";
import UserDetail from "./pages/UserDetail";
import UserList from "./pages/UserList";
import type { CurrentUser } from "./types/qiankun";

interface AppProps {
  user: CurrentUser | null;
  onLogout: () => void;
}

export default function App({ user, onLogout }: AppProps) {
  return (
    <div className="p-container flex h-full flex-col font-sans">
      {/* Micro-app Header */}
      <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-6">
        <div>
          <h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
            User Application
          </h2>
          <p className="text-sm text-gray-500">
            Welcome back,{" "}
            <span className="text-brand-primary font-medium">
              {user?.name ?? "Guest"}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/profile"
            className="hover:text-brand-primary text-sm font-medium text-gray-600 transition-colors"
          >
            Profile
          </Link>
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
            <div className="bg-brand-primary text-brand-primary h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]" />
          </div>
          <button
            onClick={onLogout}
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Router Area */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/:id" element={<UserDetail />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </div>
    </div>
  );
}
