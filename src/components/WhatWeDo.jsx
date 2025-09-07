import React from "react";

const WhatWeDo = () => {
  return (
    <section
      id="what-we-do"
      className="relative h-screen flex flex-col justify-center items-center text-center text-gray-900 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-100 to-white"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-12 text-sky-600 drop-shadow-md">
          Features
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 justify-center items-center">
          {/* Card 1 */}
          <div
            onClick={() => alert("Feature 1 clicked!")}
            className="cursor-pointer relative bg-white/80 border border-sky-300 rounded-3xl p-10 shadow-xl hover:shadow-sky-400/50 hover:-translate-y-3 transform transition-all duration-300 backdrop-blur-md flex flex-col items-center"
          >
            <img
              src="/home.png"
              alt="Feature Icon"
              className="w-20 h-20 mb-6"
            />
            <h3 className="text-2xl font-bold text-sky-700 mb-4">
              Herbal Quality Check
            </h3>
            <p className="text-gray-600 text-lg">
              E-Tongue uses chemical sensors to analyze herbal extracts and
              ensure consistency, purity, and authenticity.
            </p>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => alert("Feature 2 clicked!")}
            className="cursor-pointer relative bg-white/80 border border-sky-300 rounded-3xl p-10 shadow-xl hover:shadow-sky-400/50 hover:-translate-y-3 transform transition-all duration-300 backdrop-blur-md flex flex-col items-center"
          >
            <img
              src="/start.png"
              alt="Feature Icon"
              className="w-20 h-20 mb-6"
            />
            <h3 className="text-2xl font-bold text-sky-700 mb-4">
              AI-Powered Analysis
            </h3>
            <p className="text-gray-600 text-lg">
              Data from sensors is processed using advanced AI models to give
              accurate quality validation for herbal medicines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
