import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Contact", "Blog", "Developer"];

  return (
    <motion.nav
      className="backdrop-blur-md bg-white/80 shadow-sm px-6 py-3 flex justify-between items-center sticky top-0 z-50 border-b border-gray-100"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Section: Logo + NavLinks */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-tight"
        >
          Health<span className="text-green-500">AI</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navLinks.map((page) => (
            <li key={page}>
              <Link
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (for future - login, profile, search) */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-gray-700 hover:text-blue-600">Search 🔍</button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col space-y-6 z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-blue-600">Menu</h2>
              <X
                size={24}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-600"
              />
            </div>

            <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
              {navLinks.map((page) => (
                <li key={page}>
                  <Link
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                    className="block hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
