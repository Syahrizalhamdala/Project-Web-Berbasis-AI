// pages/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <h1 className="text-5xl font-bold mb-4">AI Employee Training</h1>
      <p className="max-w-md text-center opacity-90 mb-6">
        Platform training karyawan modern dengan modul interaktif,
        penilaian otomatis, dan AI assistant.
      </p>

      <Link
        to="/login"
        className="px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition"
      >
        Mulai Sekarang
      </Link>
    </div>
  );
}
