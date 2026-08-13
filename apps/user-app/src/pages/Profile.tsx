import type { CurrentUser } from "@demo/contracts";
import { Link } from "react-router-dom";
import { emit } from "../events/event-bus";

interface ProfileProps {
  user: CurrentUser | null;
}

export default function Profile({ user }: ProfileProps) {
  const handleUpdate = () => {
    if (!user) return;

    emit("user.updated", {
      ...user,
      name: user.name === "Phan Anh" ? "Phan Anh (Updated)" : "Phan Anh",
    });
  };

  return (
    <div className="animate-fade-in mx-auto max-w-lg rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-600 text-3xl font-bold text-white shadow-inner">
          {user?.name.charAt(0) ?? "G"}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {user?.name ?? "Guest"}
          </h2>
          <p className="text-gray-500">{user?.email ?? "Not logged in"}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="mb-1 text-sm font-medium tracking-wider text-gray-500 uppercase">
            User ID
          </h3>
          <p className="text-lg font-medium text-gray-900">
            {user?.id ?? "N/A"}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Back
        </Link>
        <button
          onClick={handleUpdate}
          className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-500/20 transition-colors hover:bg-blue-700"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
