import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="container mx-auto my-10 p-4 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Contact Us
      </h1>

      <form className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded focus:outline-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded focus:outline-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            className="w-full border p-2 rounded focus:outline-blue-500"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
