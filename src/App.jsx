import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import Login from "./pages/Login.jsx";
import ModuleDetail from "./pages/ModuleDetail.jsx";
import Quiz from "./pages/Quiz.jsx";
import ChatAI from "./pages/ChatAi.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/module/:id" element={<ModuleDetail />} />
      <Route path="/module/:id/quiz" element={<Quiz />} />
      <Route path="/chat-ai" element={<ChatAI />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
