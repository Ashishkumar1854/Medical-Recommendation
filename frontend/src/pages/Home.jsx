import { useState } from "react";
import SymptomsForm from "../components/SymptomsForm";
import ResultCard from "../components/ResultsCard";
import { motion } from "framer-motion";

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* === AI MACHINE BACKGROUND === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rotating glowing circuit lines */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full animate-spin-slow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
          >
            <defs>
              <linearGradient id="circuit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <path
              d="M100 200 L700 200 M150 400 L650 400 M200 600 L600 600 M400 100 L400 700"
              stroke="url(#circuit)"
              strokeWidth="1.5"
              strokeDasharray="6 10"
              fill="none"
            />
            <circle
              cx="400"
              cy="400"
              r="280"
              stroke="url(#circuit)"
              strokeWidth="2"
              strokeDasharray="10 14"
              fill="none"
            />
          </svg>
        </div>

        {/* Glowing AI Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 blur-3xl opacity-25 animate-pulse-slow"></div>
        </div>
      </div>

      {/* === MAIN CONTENT === */}
      <motion.div
        className="container mx-auto px-4 py-16 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          AI Medical <span className="text-green-400">Symptom Checker</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
          Get instant, intelligent health insights powered by AI — enter your
          symptoms and receive accurate, data-driven recommendations.
        </p>

        {/* Input Form Card */}
        <motion.div
          className="max-w-lg mx-auto bg-gray-900/70 backdrop-blur-md border border-gray-700 shadow-2xl rounded-3xl p-6 md:p-8 hover:border-green-400/60 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <SymptomsForm onResult={setResult} />
        </motion.div>

        {/* AI Result Section */}
        {result && (
          <motion.div
            className="mt-10 w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResultCard result={result} />
          </motion.div>
        )}
      </motion.div>

      {/* === SCANNING LINE EFFECT === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan"></div>
      </div>
    </div>
  );
}
