import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Herbal Quality Check",
    desc: "E-Tongue uses chemical sensors to analyze herbal extracts and ensure consistency, purity, and authenticity.",
    img: "/quality.png", // replace with quality check icon
  },
  {
    title: "AI-Powered Analysis",
    desc: "Data from sensors is processed using advanced AI models to give accurate quality validation for herbal medicines.",
    img: "/ai.png", // replace with AI/brain icon
  },
  {
    title: "Real-Time Monitoring",
    desc: "Continuous assessment provides real-time insights into the properties of herbal products.",
    img: "/monitor.png", // replace with monitoring/dashboard icon
  },
  {
    title: "User-Friendly Interface",
    desc: "Simple dashboards and clear visuals make results easy to understand for all users.",
    img: "/dashboard.png", // replace with dashboard/UX icon
  },
];

const WhatWeDo = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 1.5; // 🔄 adjust speed

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Manual scroll left/right
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="what-we-do"
      className="relative h-screen flex flex-col justify-center items-center text-center text-gray-900 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <img
          src="/featureBG.jpg"
          alt="Features Background"
          className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          </div>



      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-12 text-sky-600 drop-shadow-md">
          Features
        </h2>

        {/* Scrolling Cards with Hover Pause */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex space-x-12 overflow-x-hidden w-full"
        >
          {[...features, ...features].map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-sm cursor-pointer bg-white/40 border border-sky-300 rounded-3xl p-8 shadow-xl hover:shadow-sky-400/50 transform transition-all duration-300 flex flex-col items-center"
            >
              <img src={item.img} alt={item.title} className="w-20 h-20 mb-6" />
              <h3 className="text-2xl font-bold text-sky-700 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Manual Controls */}
        <div className="flex justify-center mt-10 space-x-6">
          <button       
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
           onClick={() => handleScroll("left")}
           className="px-5 py-3 rounded-full bg-sky-500 text-white shadow-md hover:bg-sky-600 transition"
            >
              ◀
          </button>

        <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleScroll("right")}
       className="px-5 py-3 rounded-full bg-sky-500 text-white shadow-md hover:bg-sky-600 transition"
        >
        ▶
</button>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
