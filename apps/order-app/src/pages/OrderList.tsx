import { Link } from 'react-router-dom';

export default function OrderList() {
  const orders = [
    { id: 1, customer: 'Phan Anh', total: '$125.00', status: 'Completed' },
    { id: 2, customer: 'Alice Smith', total: '$49.99', status: 'Processing' },
    { id: 3, customer: 'Bob Johnson', total: '$299.50', status: 'Pending' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
        <Link
          to="/create"
          className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-md shadow-brand-primary/20 transition-colors hover:opacity-90"
        >
          Create Order
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((o) => (
              <tr key={o.id} className="transition-colors hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">#{o.id}</td>
                <td className="px-6 py-4">{o.customer}</td>
                <td className="px-6 py-4">{o.total}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    o.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    o.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {o.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/${o.id}`}
                    className="font-medium text-brand-primary transition-colors hover:text-brand-secondary"
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
