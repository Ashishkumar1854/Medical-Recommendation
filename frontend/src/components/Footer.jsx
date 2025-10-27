import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import logo from "../assets/img.png";

export default function Footer() {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com/yourprofile" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <FaGithub />, url: "https://github.com/yourprofile" },
    { icon: <FaFacebook />, url: "https://facebook.com/yourprofile" },
  ];

  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-10 object-cover" />
          <span className="font-semibold text-lg text-gray-700">HealthAI</span>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-2">
        © {new Date().getFullYear()} HealthAI. All rights reserved.
      </div>
    </footer>
  );
}
