import { Link } from "react-router-dom";

export default function UserList() {
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
