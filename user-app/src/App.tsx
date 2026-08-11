import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import type { CurrentUser } from "./types/qiankun";

function UserList() {
  const users = [
    { id: 1, name: "Alice Smith", role: "Admin", email: "alice@example.com" },
    { id: 2, name: "Bob Johnson", role: "Editor", email: "bob@example.com" },
    {
      id: 3,
      name: "Charlie Davis",
      role: "Viewer",
      email: "charlie@example.com",
    },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Active Users</h2>
        <Link
          to="/create"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/20 transition-colors hover:bg-blue-700"
        >
          Add New User
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((u) => (
              <tr key={u.id} className="transition-colors hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {u.name}
                </td>
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4">
                  <span className="rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/${u.id}`}
                    className="font-medium text-blue-600 transition-colors hover:text-blue-700"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UserDetail() {
  return (
    <div className="animate-fade-in rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600">
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <h2 className="mb-2 text-2xl font-bold text-gray-900">User Details</h2>
      <p className="mb-6 text-gray-500">
        Detailed view configuration goes here.
      </p>
      <Link
        to="/"
        className="text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        &larr; Back to users
      </Link>
    </div>
  );
}

function CreateUser() {
  return (
    <div className="animate-fade-in mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Create New User</h2>
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            placeholder="john@example.com"
          />
        </div>
        <div className="flex gap-3 pt-4">
          <Link
            to="/"
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-500/20 transition-colors hover:bg-blue-700">
            Save User
          </button>
        </div>
      </div>
    </div>
  );
}

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
