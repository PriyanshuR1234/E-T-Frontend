import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 text-white text-center overflow-hidden h-screen "
    >
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#4b2b2b] to-[#7f5a4b] animate-gradient-x"></div>

      {/* Glow Overlays */}
      <div className="absolute top-20 left-16 w-80 h-80 bg-red-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-24 right-16 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
          About <span className="text-red-500">Us</span>
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto mb-16 text-lg">
          We are a passionate team of innovators working on the{" "}
          <span className="text-red-400 font-semibold">
            Electronic Tongue (E-Tongue)
          </span>{" "}
          for Herbal Quality Assessment — a project selected under{" "}
          <span className="text-white font-semibold">
            Smart India Hackathon (SIH)
          </span>.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Priyanshu */}
          <div className="relative bg-[#2b1b1b] border border-red-500/40 backdrop-blur-md rounded-3xl p-10 shadow-lg hover:shadow-red-500/40 transition transform hover:-translate-y-3">
            {/* Stickers */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full shadow-md"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white rounded-full shadow-md"></div>

            <h3 className="text-2xl font-bold text-red-400 mb-2">Priyanshu Rajput</h3>
            <p className="text-gray-200 mt-2 text-lg">Software & System Integration</p>
          </div>

          {/* Sahil */}
          <div className="relative bg-[#2b1b1b] border border-purple-500/40 backdrop-blur-md rounded-3xl p-10 shadow-lg hover:shadow-purple-500/40 transition transform hover:-translate-y-3">
            {/* Stickers */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full shadow-md"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white rounded-full shadow-md"></div>

            <h3 className="text-2xl font-bold text-purple-400 mb-2">Sahil Gulati</h3>
            <p className="text-gray-200 mt-2 text-lg">AI & Data Processing</p>
          </div>

          {/* Divya */}
          <div className="relative bg-[#2b1b1b] border border-pink-500/40 backdrop-blur-md rounded-3xl p-10 shadow-lg hover:shadow-pink-500/40 transition transform hover:-translate-y-3">
            {/* Stickers */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-full shadow-md"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white rounded-full shadow-md"></div>

            <h3 className="text-2xl font-bold text-pink-400 mb-2">Divya Singhal</h3>
            <p className="text-gray-200 mt-2 text-lg">Hardware & Sensor Implementation</p>
          </div>
        </div>

        {/* Bottom Line */}
        <p className="text-gray-300 mt-16 max-w-3xl mx-auto text-lg">
          Together, we aim to bridge the gap between{" "}
          <span className="text-red-400">Ayurvedic knowledge</span> and{" "}
          <span className="text-white">modern scientific validation</span>,
          contributing to the future of MedTech and herbal standardization.
        </p>
      </div>
    </section>
  );
};

export default About;
