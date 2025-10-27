import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <motion.div
        className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      ></motion.div>
    </div>
  );
}
