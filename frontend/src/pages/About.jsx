import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiDna1 } from "react-icons/gi"; // DNA strand icon

export default function About() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setTilt({
        rotateX: y * -15, // tilt up/down
        rotateY: x * 15, // tilt left/right
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* === Glowing Animated Background Elements === */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* === Floating Interactive Glowing DNA Icon === */}
      <motion.div
        className="absolute bottom-10 right-10 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.7)] cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotate: 360,
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 10, ease: "linear" },
          rotateX: { type: "spring", stiffness: 50, damping: 15 },
          rotateY: { type: "spring", stiffness: 50, damping: 15 },
        }}
      >
        <GiDna1 className="text-6xl sm:text-7xl" />
      </motion.div>

      {/* === Main Content === */}
      <motion.div
        className="relative z-10 max-w-5xl bg-white/10 backdrop-blur-xl border border-blue-400/30 shadow-2xl rounded-3xl p-8 md:p-14 space-y-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-10">
          About <span className="text-green-400">HealthAI</span>
        </h1>

        {/* === Vision === */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-blue-400">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a world where everyone — regardless of background or
            location — has access to intelligent, AI-powered healthcare
            guidance. HealthAI strives to redefine medical accessibility by
            blending empathy, precision, and technology to support proactive
            wellness and preventive care.
          </p>
        </section>

        {/* === Who We Are === */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-green-400">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            We are a group of developers, healthcare analysts, and AI
            enthusiasts determined to create meaningful solutions for real-world
            medical challenges. The initiative was founded by{" "}
            <strong>Ashish Kumar</strong>, a{" "}
            <strong>B.Tech student and AI/ML Engineer</strong> driven by the
            mission to merge artificial intelligence with compassionate
            healthcare, empowering users through data-driven insights.
          </p>
        </section>

        {/* === Mission === */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-cyan-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to harness the power of AI to deliver early health
            predictions and personalized recommendations. HealthAI learns with
            every user interaction — enhancing accuracy, understanding human
            health patterns, and ultimately fostering a more proactive approach
            to well-being.
          </p>
        </section>

        {/* === Philosophy === */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-purple-400">
            Your Well-Being, Our Priority
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At HealthAI, we believe in combining innovation with care. Every
            recommendation is built with responsibility, ethics, and accuracy at
            its core. We’re not just building an app — we’re building a trusted
            companion that guides you toward better health and awareness.
          </p>
        </section>

        {/* === Developer Note === */}
        <div className="text-center border-t border-blue-400/30 pt-6 mt-8">
          <p className="text-gray-400 text-sm italic">
            “Developed with precision and purpose by Ashish Kumar — bridging AI
            and healthcare for a smarter, healthier tomorrow.”
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
