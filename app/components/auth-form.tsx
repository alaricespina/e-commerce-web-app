import Link from "next/link";

interface AuthFormProps {
  type: "login" | "signup";
}

export function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === "login";
  
  return (
    <form className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-gray-400 mt-2">
          {isLogin
            ? "Sign in to access your account"
            : "Sign up to start shopping"}
        </p>
      </div>

      {!isLogin && (
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {isLogin && (
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-gray-300">
              Remember me
            </label>
          </div>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Forgot password?
          </a>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
      >
        {isLogin ? "Sign In" : "Create Account"}
      </button>

      <p className="text-center text-gray-400 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Link
          href={isLogin ? "/auth/signup" : "/auth/login"}
          className="text-blue-500 hover:text-blue-400"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </Link>
      </p>
    </form>
  );
}
