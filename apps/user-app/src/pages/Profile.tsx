import type { CurrentUser } from "@demo/contracts";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Edit2,
  Hash,
  Mail,
  ShieldCheck,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { emit } from "../events/event-bus";

interface ProfileProps {
  user: CurrentUser | null;
}

export default function Profile({ user }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");

  // Sync local state when user prop changes
  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEditName(user.name);
    }
  }, [user]);

  const handleUpdate = () => {
    if (!user) return;
    if (!editName.trim()) return;

    emit("user.updated", {
      ...user,
      name: editName.trim(),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(user?.name ?? "");
    setIsEditing(false);
  };

  return (
    <div className="animate-fade-in-up mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
        {/* Cover Photo Area */}
        <div className="h-32 w-full bg-linear-to-r from-blue-500 via-teal-400 to-emerald-400"></div>

        <div className="relative px-8 pb-8">
          {/* Avatar Area */}
          <div className="absolute -top-16 flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl">
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user?.name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-600 text-5xl font-bold text-white">
                {user?.name.charAt(0) ?? "G"}
              </div>
            )}
            <div className="absolute right-1 bottom-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-500">
              <CheckCircle2 className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Action Buttons (Top Right) */}
          <div className="mt-4 flex justify-end gap-3">
            <Link
              to="/"
              className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-brand-primary shadow-brand-primary/30 hover:bg-brand-primary/90 focus:ring-brand-primary flex items-center rounded-xl px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                <Edit2 className="mr-2 h-4 w-4" />
                Edit Profile
              </button>
            )}
            {isEditing && (
              <>
                <button
                  onClick={handleCancel}
                  className="flex items-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                >
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="flex items-center rounded-xl bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-green-600/30 transition-all hover:bg-green-700 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:outline-none"
                >
                  <Check className="mr-2 h-4 w-4" />
                  Save
                </button>
              </>
            )}
          </div>

          {/* User Info Header */}
          <div className="mt-6">
            {isEditing ? (
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  autoFocus
                  className="border-brand-primary focus:border-brand-primary focus:ring-brand-primary block w-64 rounded-xl border bg-white px-3 py-2 text-2xl font-bold text-gray-900 shadow-sm focus:ring-1 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
            ) : (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {user?.name ?? "Guest User"}
              </h2>
            )}
            <div className="mt-2 flex items-center gap-2 text-gray-500">
              <ShieldCheck className="h-4 w-4 text-teal-600" />
              <span className="font-medium text-teal-600">
                Verified Account
              </span>
            </div>
          </div>

          {/* User Details Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-5 transition-colors hover:bg-gray-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Email Address
                </p>
                <p className="truncate text-base font-medium text-gray-900">
                  {user?.email ?? "Not logged in"}
                </p>
              </div>
            </div>

            {/* ID Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-5 transition-colors hover:bg-gray-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <Hash className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                  User ID
                </p>
                <p className="text-base font-medium text-gray-900">
                  {user?.id ?? "N/A"}
                </p>
              </div>
            </div>

            {/* Role Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-5 transition-colors hover:bg-gray-50 sm:col-span-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Workspace Role
                </p>
                <p className="text-base font-medium text-gray-900">
                  {user?.email === "admin@demo.com"
                    ? "Administrator"
                    : "Standard User"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
