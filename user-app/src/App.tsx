import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import UserDetail from "./pages/UserDetail";
import UserList from "./pages/UserList";
import type { CurrentUser } from "./types/qiankun";

interface AppProps {
  user: CurrentUser | null;
  onLogout: () => void;
}

export default function App({ user, onLogout }: AppProps) {
  return (
    <div className="flex h-full flex-col p-6 font-sans">
      {/* Micro-app Header */}
      <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-6">
        <div>
          <h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
            User Application
          </h2>
          <p className="text-sm text-gray-500">
            Welcome back,{" "}
            <span className="font-medium text-blue-600">
              {user?.name ?? "Guest"}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
            <div className="h-2 w-2 rounded-full bg-blue-500 text-blue-500 shadow-[0_0_8px_currentColor]" />
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
        <BrowserRouter basename="/users">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/:id" element={<UserDetail />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
