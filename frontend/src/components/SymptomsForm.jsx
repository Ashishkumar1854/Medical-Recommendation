// import { useState } from "react";
// import api from "../api/axios";

// export default function SymptomsForm({ onResult }) {
//   const [symptoms, setSymptoms] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!symptoms) return setError("Please enter your symptoms");

//     setLoading(true);
//     setError("");
//     try {
//       const response = await api.post("/predict", {
//         symptoms: symptoms.split(","),
//       });
//       onResult(response.data);
//     } catch (err) {
//       setError("Error fetching prediction. Try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//       <textarea
//         className="border p-3 rounded-md focus:outline-blue-500"
//         rows={4}
//         placeholder="Enter symptoms separated by commas"
//         value={symptoms}
//         onChange={(e) => setSymptoms(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
//         disabled={loading}
//       >
//         {loading ? "Predicting..." : "Predict Disease"}
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//     </form>
//   );
// }

import { useState } from "react";
import api from "../api/axios";

export default function SymptomsForm({ onResult }) {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptoms) return setError("Please enter your symptoms");

    setLoading(true);
    setError("");
    try {
      const response = await api.post("/predict", {
        symptoms: symptoms.split(","),
      });
      onResult(response.data);
    } catch (err) {
      setError("Error fetching prediction. Try again.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 text-center"
    >
      {/* === Text Area === */}
      <textarea
        className="border border-blue-300/50 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 
                   rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300
                   shadow-lg"
        rows={4}
        placeholder="Enter symptoms separated by commas..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />

      {/* === Button === */}
      <button
        type="submit"
        className={`py-2.5 px-6 rounded-lg text-white font-semibold transition-all duration-300
          ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          }`}
        disabled={loading}
      >
        {loading ? "Predicting..." : "🔍 Predict Disease"}
      </button>

      {/* === Error Message === */}
      {error && <p className="text-red-500 font-medium">{error}</p>}
    </form>
  );
}
