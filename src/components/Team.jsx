import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const teamMembers = [
  { name: "Sahil Gulati", img: "/Sahil.jpg", role: "Full Stack Developer" },
  { name: "Divya Singhal", img: "/Divya.png", role: "IoT and Sensors Expert" },
  { name: "Priyanshu Rajput", img: "/Priyanshu.jpg", role: "Full Stack Developer" },
  { name: "Pragati Tomar", img: "/Pragati.png", role: "Backend Developer" },
  { name: "Himanshu", img: "/Himanshu.png", role: "AI & ML Expert" },
  { name: "Srishti", img: "/Srishti.png", role: "Software Engineer" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 text-center bg-gradient-to-b from-sky-50 to-white h-auto"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Our Team Section */}
        <h2 className="text-4xl font-bold mb-12 text-sky-600">Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Image card with hover effects */}
              <div className="relative group w-80 h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                {/* Actual image */}
                <div
                  className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ backgroundImage: `url(${member.img})` }}
                ></div>

                {/* Overlay (black transparent with name + role) */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <span className="text-xl font-semibold text-white">
                    {member.name}
                  </span>
                  <span className="text-sm text-gray-300 mt-2">
                    ({member.role})
                  </span>
                </div>

                {/* Edges effect */}
                <div className="absolute inset-0 rounded-3xl group-hover:rounded-none transition-all duration-500"></div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 text-2xl transition-transform duration-300 hover:scale-125"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 text-2xl transition-transform duration-300 hover:scale-125"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 text-2xl transition-transform duration-300 hover:scale-125"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
