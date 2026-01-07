// pages/Quiz.jsx
import QuizCard from "../components/ui/QuizCard";

export default function Quiz() {
  const questions = [
    { q: "Apa itu SOP?", a: ["Prosedur", "Dokumen", "Makanan"], correct: 0 },
    { q: "Siapa pelanggan?", a: ["Pembeli", "Musuh", "Robot"], correct: 0 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>

      {questions.map((item, idx) => (
        <QuizCard key={idx} data={item} />
      ))}
    </div>
  );
}
