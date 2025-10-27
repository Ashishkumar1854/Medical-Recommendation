import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="container mx-auto my-10 space-y-6 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 text-center">About Us</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Our Vision</h2>
        <p>
          We envision a world where access to healthcare information is a
          fundamental right...
        </p>

        <h2 className="text-xl font-semibold">Who We Are</h2>
        <p>
          We are a passionate team of healthcare professionals, data scientists,
          and technology enthusiasts...
        </p>

        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p>
          Our mission is to provide a seamless platform leveraging AI and ML to
          identify health concerns...
        </p>

        <h2 className="text-xl font-semibold">Your Well-being, Our Priority</h2>
        <p>
          Your health is our top priority. Accurate predictions with
          comprehensive info about diseases.
        </p>
      </section>
    </motion.div>
  );
}
