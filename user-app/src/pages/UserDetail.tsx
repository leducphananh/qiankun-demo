import { Link } from "react-router-dom";

export default function UserDetail() {
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
