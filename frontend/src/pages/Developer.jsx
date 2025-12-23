import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";

export default function Developer() {
  return (
    <motion.div
      className="relative container mx-auto my-16 p-6 max-w-3xl text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-blue-600 mb-6 tracking-wide">
        Meet the Developer
      </h1>

      <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-100">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Hello, I'm <strong>Ashish Kumar</strong> — an AI and Machine Learning
          Engineer passionate about creating intelligent healthcare solutions
          that make a difference.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I specialize in predictive analytics, NLP, and data-driven
          personalization, combining deep learning with modern web development
          for scalable and human-centered outcomes.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          This platform reflects my vision to integrate AI with healthcare,
          empowering users through smarter, accessible technology.
        </p>
      </div>

      {/* Floating Glowing 3D AI Icon */}
      <motion.div
        className="absolute bottom-6 right-6 text-blue-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <FaBrain className="text-5xl drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
      </motion.div>
    </motion.div>
  );
}
