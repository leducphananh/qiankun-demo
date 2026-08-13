import { Link, useParams } from 'react-router-dom';

export default function OrderDetail() {
  const { id } = useParams();

  return (
    <div className="animate-fade-in mx-auto max-w-lg rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Order #{id}</h2>
          <p className="text-gray-500">Placed on Oct 24, 2026</p>
        </div>
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Completed
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between border-b border-gray-100 pb-4">
          <span className="text-gray-600">Premium Plan</span>
          <span className="font-medium text-gray-900">$99.00</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 pb-4">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium text-gray-900">$1.00</span>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-lg font-bold text-brand-primary">$100.00</span>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Back to Orders
        </Link>
      </div>
    </div>
  );
}
