import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaBriefcase,
} from "react-icons/fa";
import logo from "../assets/img.png";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/mwbyashish?igsh=MWNwZWlnd3NiaXByYg==",
    },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/ashishkumar1854" },
    { icon: <FaGithub />, url: "https://github.com/Ashishkumar1854" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/16zbKLAQDH/" },
    {
      icon: <FaBriefcase />,
      url: "https://ashish-dev-port.netlify.app",
      label: "Portfolio", // ✅ Tooltip text
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-300 border-t border-gray-800 mt-16 overflow-hidden">
      {/* === Glowing top line === */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 animate-pulse" />

      {/* === Footer Content === */}
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left relative z-10">
        {/* Brand Section */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full shadow-md"
          />
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              HealthAI
            </h2>
            <p className="text-xs text-gray-400">
              Smarter healthcare through innovation.
            </p>
          </div>
        </div>

        {/* Social + Portfolio Links */}
        <div className="flex space-x-5 relative">
          {socialLinks.map((social, index) => (
            <div key={index} className="relative group">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition duration-300 transform hover:scale-110"
              >
                <span className="text-xl">{social.icon}</span>
              </a>

              {/* ✅ Tooltip for Portfolio */}
              {social.label && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[11px] bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none shadow-lg">
                  {social.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800/50 mx-6"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-400 py-3 relative z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">HealthAI</span>. All rights
        reserved.
      </div>

      {/* Soft Glow Background */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-green-500/10 blur-3xl rounded-full animate-pulse-slow"></div>

      {/* Animations */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 5s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
}
