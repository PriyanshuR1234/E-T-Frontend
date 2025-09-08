import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-10 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-6">
        
        {/* Logo */}
        <img
          src="/Logo.png"
          alt="E-Tongue Logo"
          className="w-50 h-50 object-contain"
        />

        {/* Project Title */}
        <h2 className="text-2xl font-bold">E-Tongue Project</h2>
        <p className="text-center text-sm max-w-2xl">
          Advancing <span className="font-semibold">Herbal Quality Assessment</span> 
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

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} E-Tongue Project | Designed with 💙 at MIET
      </div>
    </footer>
  );
};

export default Footer;
