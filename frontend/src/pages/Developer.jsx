import { motion } from "framer-motion";

export default function Developer() {
  return (
    <motion.div
      className="container mx-auto my-10 p-4 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Meet the Developer
      </h1>
      <p>
        Hello, I'm Junaid Khan, your AI and Machine Learning Engineer.
        Passionate about healthcare tech, AI, and improving accessibility
        globally.
      </p>
      <p>
        Expertise in predictive models, intelligent algorithms, and user-centric
        solutions.
      </p>
      <p>
        This platform represents my vision to combine AI with healthcare to
        provide personalized guidance.
      </p>
    </motion.div>
  );
}
