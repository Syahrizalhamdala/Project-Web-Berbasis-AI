// pages/ModuleDetail.jsx
import { useParams, Link } from "react-router-dom";

export default function ModuleDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Modul #{id}</h1>
      <p className="text-gray-600 mb-4">
        Ini adalah halaman materi lengkap dari modul.
      </p>

      <video
        controls
        className="w-full max-w-2xl rounded-xl shadow mb-6"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <Link
        to={`/module/${id}/quiz`}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Mulai Quiz
      </Link>
    </div>
  );
}
