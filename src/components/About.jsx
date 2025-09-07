import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 text-white text-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/aboutBG.jpg"
          alt="About Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-800/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold mb-8 drop-shadow-lg text-sky-300">
          About <span className="text-white">E-Tongue</span>
        </h2>

        {/* Intro */}
        <p className="text-sky-100 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          The <span className="text-sky-300 font-semibold">Electronic Tongue (E-Tongue)</span> 
          is an innovative device designed for{" "}
          <span className="font-semibold text-white">herbal quality assessment</span>.  
          It uses advanced sensors, AI-driven analysis, and intelligent software to 
          replicate how a human tongue perceives taste, enabling objective evaluation 
          of herbal medicines and natural extracts.
        </p>

        {/* Flow Explanation */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-sky-400/40 transition transform hover:-translate-y-3">
            <h3 className="text-2xl font-bold text-sky-300 mb-4">1. Sensing</h3>
            <p className="text-sky-100 text-lg">
              Specialized <span className="text-white">chemical sensors</span> 
              detect the taste profiles (bitter, sweet, sour, etc.) of herbal extracts.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-sky-400/40 transition transform hover:-translate-y-3">
            <h3 className="text-2xl font-bold text-sky-300 mb-4">2. Data Processing</h3>
            <p className="text-sky-100 text-lg">
              The signals are processed with <span className="text-white">AI & ML models</span>, 
              ensuring accurate and consistent analysis of herbal quality.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-sky-400/40 transition transform hover:-translate-y-3">
            <h3 className="text-2xl font-bold text-sky-300 mb-4">3. Validation</h3>
            <p className="text-sky-100 text-lg">
              Results are validated to help bridge{" "}
              <span className="text-white">Ayurvedic knowledge</span> 
              with <span className="text-white">modern science</span>.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <p className="text-sky-200 mt-16 max-w-4xl mx-auto text-lg leading-relaxed">
          By combining <span className="text-white font-semibold">hardware sensors</span>, 
          <span className="text-sky-300 font-semibold"> artificial intelligence</span>, and{" "}
          <span className="text-white font-semibold">scientific research</span>,  
          the E-Tongue ensures standardization and quality assurance for herbal medicines — 
          paving the way for safer and globally accepted Ayurvedic solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
