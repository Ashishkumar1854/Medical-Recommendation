import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdPerson } from "react-icons/md";

export default function Contact() {
  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center overflow-hidden px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* === Floating AI Glow === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* === Main Card === */}
      <motion.div
        className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-blue-400/30 shadow-2xl rounded-3xl p-10 md:p-14"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* === Left: Owner Info === */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-2xl border border-blue-300/20 p-6 md:p-8 hover:border-blue-400/40 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">
              Contact Details
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-center gap-3">
                <MdPerson className="text-blue-500 text-xl" />
                <span>Ashish Kumar</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-blue-500 text-xl" />
                <span>stonebytetech@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-blue-500 text-xl" />
                <span>kashish84396@gmail.com.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-blue-500 text-xl" />
                <span>+91 9693263085</span>
              </li>
              <li className="flex items-center gap-3">
                <MdLocationOn className="text-blue-500 text-xl" />
                <span>Bhilai, Chhattisgarh, India — 490023</span>
              </li>
            </ul>
          </motion.div>

          {/* === Right: Contact Form === */}
          <motion.form
            className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-2xl border border-blue-300/20 p-6 md:p-8 hover:border-green-400/40 transition-all duration-300 shadow-lg space-y-4"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              Send a Message
            </h2>

            <div>
              <label className="block font-medium mb-1 text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-500 bg-transparent text-white p-2 rounded focus:outline-none focus:border-blue-400 transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-500 bg-transparent text-white p-2 rounded focus:outline-none focus:border-blue-400 transition"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-300">
                Message
              </label>
              <textarea
                className="w-full border border-gray-500 bg-transparent text-white p-2 rounded focus:outline-none focus:border-blue-400 transition"
                rows="4"
                placeholder="Your Message..."
              ></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>

      {/* === Floating AI Brain Icon === */}
      <motion.div
        className="absolute bottom-10 right-10 text-blue-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
      >
        <FaBrain className="text-6xl drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
      </motion.div>
    </motion.div>
  );
}
