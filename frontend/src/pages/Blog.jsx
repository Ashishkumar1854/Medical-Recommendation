import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "AI in Healthcare",
      excerpt: "How AI is transforming healthcare globally...",
    },
    {
      id: 2,
      title: "Preventive Health Tips",
      excerpt: "Learn tips to prevent common illnesses...",
    },
    {
      id: 3,
      title: "Understanding Symptoms",
      excerpt: "Why early detection is crucial for health...",
    },
  ];

  return (
    <motion.div
      className="container mx-auto my-10 p-4 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 text-center">Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
