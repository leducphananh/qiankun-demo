import { Route, Routes } from "react-router-dom";
import CreateOrder from "./pages/CreateOrder";
import OrderDetail from "./pages/OrderDetail";
import OrderList from "./pages/OrderList";
import type { CurrentUser } from "./types/qiankun";

interface AppProps {
  user: CurrentUser | null;
}

export default function App({ user }: AppProps) {
  return (
    <div className="p-container flex h-full flex-col font-sans">
      {/* Micro-app Header */}
      <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-6">
        <div>
          <h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
            Order Application
          </h2>
          <p className="text-sm text-gray-500">
            Welcome back,{" "}
            <span className="text-brand-primary font-medium">
              {user?.name ?? "Guest"}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
            <div className="bg-brand-primary text-brand-primary h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]" />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<OrderList />} />
          <Route path="/create" element={<CreateOrder />} />
          <Route path="/:id" element={<OrderDetail />} />
        </Routes>
      </div>
    </div>
  );
}
