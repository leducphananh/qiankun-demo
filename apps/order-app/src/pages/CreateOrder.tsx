import { Link } from 'react-router-dom';

export default function CreateOrder() {
  return (
    <div className="animate-fade-in mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-container shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Create New Order</h2>
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Customer Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Total Amount
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none"
            placeholder="$0.00"
          />
        </div>
        <div className="flex gap-3 pt-4">
          <Link
            to="/"
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button className="flex-1 rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-brand-primary/20 transition-colors hover:opacity-90">
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
}
