import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-4 pt-0"> {/* ⬅️ reduced from py-14 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 scale-95"> {/* ⬅️ shrink whole content */}
        
        {/* Left Side - Logo + Project Info */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Logo */}
          <img
            src="/Logo.png"
            alt="E-Tongue Logo"
            className="w-50 h-50 object-contain"
          />

          {/* Project Title */}
          <h2 className="text-2xl md:text-3xl font-bold">E-Tongue Project</h2>
          <p className="text-sm md:text-base max-w-md">
            Advancing <span className="font-semibold">Herbal Quality Assessment </span> 
            through Electronic Tongue Technology
          </p>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl">
            <a
              href="mailto:info@etongue.com"
              className="hover:text-gray-200 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="grid grid-cols-3 gap-8 mt-30 pt-45 md:mt-12 text-base">
          <div>
            <h3 className="font-bold mb-3">ABOUT US</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Team</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#press" className="hover:underline">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#help" className="hover:underline">Help Center</a></li>
              <li><a href="#ContactInfo" className="hover:underline">Contact Us</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">CONNECT</h3>
            <ul className="space-y-2">
              <li><a href="#discord" className="hover:underline">Discord</a></li>
              <li><a href="#twitter" className="hover:underline">Twitter</a></li>
              <li><a href="#instagram" className="hover:underline">Instagram</a></li>
              <li><a href="#linkedin" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} E-Tongue Project | Designed By 💙 HYPERLOOP
      </div>
    </footer>
  );
};

export default Footer;
