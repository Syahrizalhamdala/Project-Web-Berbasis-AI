// pages/Login.jsx
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />

          <Link
            to="/dashboard"
            className="bg-blue-600 text-white py-2 rounded text-center hover:bg-blue-700"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
