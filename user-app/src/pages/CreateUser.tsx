import { Link } from "react-router-dom";

export default function CreateUser() {
  return (
    <div className="animate-fade-in p-container mx-auto max-w-md rounded-xl border border-gray-200 bg-white shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Create New User</h2>
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="focus:border-brand-primary focus:ring-brand-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:ring-1 focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="focus:border-brand-primary focus:ring-brand-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:ring-1 focus:outline-none"
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
          <button className="bg-brand-primary shadow-brand-primary/20 flex-1 rounded-lg px-4 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:opacity-90">
            Save User
          </button>
        </div>
      </div>
    </div>
  );
}
