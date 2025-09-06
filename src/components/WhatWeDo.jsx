import React from "react";

const WhatWeDo = () => {
  return (
    <section
      id="what-we-do"
      className="relative py-24 text-white text-center bg-black h-screen"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 text-red-500">What We Do</h2>
        <p className="text-gray-300 text-lg">
          At E-Tongue, we focus on using advanced sensor systems and artificial
          intelligence to evaluate the quality of medicinal herbs. We aim to
          help researchers, farmers, and pharmaceutical industries ensure
          authentic and high-quality herbal products.
          <br /> <br />
          Our work includes developing innovative hardware systems, AI-based
          data analysis pipelines, and interactive dashboards for real-time
          monitoring and reporting.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
