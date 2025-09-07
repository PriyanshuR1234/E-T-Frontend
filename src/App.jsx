import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import Spline from "@splinetool/react-spline";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import components
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Contact from "./components/Contact";
import NewPage from "./pages/NewPage"; // ✅ import new page

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "what-we-do", "contact"];
      let current = "hero";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 3 &&
            rect.bottom >= window.innerHeight / 3
          ) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Router>
      <Routes>
        {/* ✅ NewPage Route */}
        <Route path="/newpage" element={<NewPage />} />

        {/* ✅ Main Website */}
        <Route
          path="/"
          element={
            <div className="font-sans text-white bg-black">
              {/* Hero Section */}
              <section
                id="hero"
                className="relative h-screen flex items-center justify-center text-center bg-black"
              >
                <img
                  src="/IntroBG.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10">
                  <h1 className="text-5xl font-bold mb-4 text-black flex justify-center">
  Welcome to{" "}
  <span className="text-sky-600 flex ml-2">
    {["E", "-", "T", "o", "n", "g", "u", "e"].map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, type: "spring", stiffness: 200, damping: 20 }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </span>
</h1>

                  <p className="text-xl mb-8 text-black">
                    Electronic Tongue for Herbal Quality Assessment
                  </p>
                  <div className="space-x-4">
                    <button
                      onClick={() => scrollToSection("what-we-do")}
                      className="px-6 py-3 bg-sky-600 rounded-2xl shadow-lg hover:bg-sky-700 transition"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="px-6 py-3 bg-transparent border border-black rounded-2xl hover:bg-sky-800 hover:text-white transition"
                    >
                      <div className="text-black hover:text-white">Contact Us</div>
                    </button>
                  </div>
                </div>

                {/* Jumping Arrow */}
                <div
                  onClick={() => scrollToSection("about")}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-4xl text-black cursor-pointer"
                >
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaAngleDown />
                  </motion.div>
                </div>
              </section>

              {/* ✅ Sections */}
              <About />
              <WhatWeDo />
              <Contact />

              {/* ✅ Mac Dock Navbar */}
              <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                <motion.div
                  animate={{
                    scale: hoverIndex !== null ? 1.05 : 1, // dock expands slightly
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex items-end bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl space-x-4"
                >
                  {[
                    { id: "home", label: "Home", icon: "/home.png", onClick: () => scrollToSection("hero"), link: "/" },
                    { id: "about", label: "About", icon: "/about.png", onClick: () => scrollToSection("about") },
                    { id: "what-we-do", label: "Features", icon: "/work.png", onClick: () => scrollToSection("what-we-do") },
                    { id: "contact", label: "Contact", icon: "/contact.png", onClick: () => scrollToSection("contact") },
                    { id: "newpage", label: "Get Started", icon: "/start.png", link: "/newpage" },
                  ].map((item, index, arr) => {
                    // distance-based scaling like Mac dock
                    const distance = hoverIndex === null ? 0 : Math.abs(index - hoverIndex);
                    const scale =
                      hoverIndex === null
                        ? 1
                        : Math.max(1, 1.35 - distance * 0.15); // center bigger, sides smaller
                    const lift =
                      hoverIndex === index
                        ? -18
                        : hoverIndex !== null && distance === 1
                        ? -8
                        : 0;

                    return (
                      <div
                        key={item.id}
                        className="relative flex flex-col items-center"
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                      >
                        {/* Tooltip above */}
                        {hoverIndex === index && (
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ type: "spring", stiffness: 250, damping: 20 }}
                            className="absolute -top-10 text-xs font-medium bg-gray-800 text-white px-2 py-1 rounded shadow-lg z-50"
                          >
                            {item.label}
                          </motion.span>
                        )}

                        {/* Icon bubble */}
                        {item.link ? (
                          <Link to={item.link}>
                            <motion.div
                              animate={{ scale, y: lift }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center shadow-md"
                            >
                              <img src={item.icon} alt={item.label} className="h-8 w-8 object-contain" />
                            </motion.div>
                          </Link>
                        ) : (
                          <motion.div
                            onClick={item.onClick}
                            animate={{ scale, y: lift }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center shadow-md cursor-pointer"
                          >
                            <img src={item.icon} alt={item.label} className="h-8 w-8 object-contain" />
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Floating 3D Spline */}
              <div className="fixed bottom-0 right-0 z-40 pointer-events-none">
                <div className="h-50 w-50">
                  <Spline scene="https://prod.spline.design/NfwNxDSgByBL4GgB/scene.splinecode" />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
