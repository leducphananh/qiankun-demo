import { ArrowRight, Loader2, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      await login(email);
      navigate("/"); // Redirect to home on success
    } catch {
      setError("Failed to login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      <div className="z-10 w-full max-w-md p-8">
        <div className="animate-fade-in-up rounded-3xl border border-white/20 bg-white/60 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
          {/* Logo & Header */}
          <div className="mb-8 text-center">
            <div className="from-brand-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-tr to-blue-400 shadow-lg shadow-blue-500/30">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Enter your credentials to access the workspace
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:border-brand-primary focus:ring-brand-primary block w-full rounded-xl border border-gray-200 bg-white/50 py-2.5 pr-3 pl-10 text-sm text-gray-900 transition-colors focus:bg-white focus:ring-1 focus:outline-none"
                  placeholder="admin@demo.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-brand-primary text-xs font-medium hover:text-blue-700"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:border-brand-primary focus:ring-brand-primary block w-full rounded-xl border border-gray-200 bg-white/50 py-2.5 pr-3 pl-10 text-sm text-gray-900 transition-colors focus:bg-white focus:ring-1 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group bg-brand-primary shadow-brand-primary/30 hover:bg-brand-primary/90 focus:ring-brand-primary relative flex w-full justify-center overflow-hidden rounded-xl py-3 text-sm font-medium text-white shadow-lg transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-70"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <span className="flex items-center">
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-brand-primary font-medium hover:text-blue-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
