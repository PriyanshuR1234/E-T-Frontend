import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
// import Spline from "@splinetool/react-spline";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import components
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Contact from "./components/Contact";
import NewPage from "./pages/NewPage"; // ✅ import new page

export default function App() {
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;

      // Show navbar only after hero is out of view
      if (window.scrollY >= heroBottom - 50) {
        setSticky(true);
        setShowNavbar(true);
      } else {
        setSticky(false);
        setShowNavbar(false);
      }

      // Detect active section
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
                <video
                  src="/background.mp4"
                  autoPlay
                  muted
                  loop
                  className="absolute inset-0 w-full h-full object-cover"
                ></video>
                <div className="relative z-10">
                  <h1 className="text-5xl font-bold mb-4">
                    Welcome to <span className="text-red-500">E-Tongue</span>
                  </h1>
                  <p className="text-xl mb-8">
                    Electronic Tongue for Herbal Quality Assessment
                  </p>
                  <div className="space-x-4">
                    <button
                      onClick={() => scrollToSection("what-we-do")}
                      className="px-6 py-3 bg-red-600 rounded-2xl shadow-lg hover:bg-red-700 transition"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="px-6 py-3 bg-transparent border border-white rounded-2xl hover:bg-white hover:text-black transition"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>

                {/* Jumping Arrow */}
                <div
                  onClick={() => scrollToSection("about")}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-4xl text-white cursor-pointer"
                >
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaAngleDown />
                  </motion.div>
                </div>
              </section>

              {/* Navbar */}
              {showNavbar && (
                <nav
                  id="navbar"
                  className="fixed top-0 w-full bg-gradient-to-r from-black to-red-900 shadow-lg transition-all duration-300 z-50"
                >
                  <div className="container mx-auto flex justify-between items-center px-6 py-4">
                    {/* Logo */}
                    <img
                      src="/Logo.png"
                      alt="E-Tongue Logo"
                      className="h-10 w-auto cursor-pointer"
                      onClick={() => scrollToSection("hero")}
                    />

                    <ul className="flex space-x-6 items-center">
                      {["about", "what-we-do", "contact"].map((id) => (
                        <li key={id}>
                          <button
                            onClick={() => scrollToSection(id)}
                            className={`px-3 py-1 transition rounded ${
                              activeSection === id
                                ? "bg-red-600 shadow-lg text-white"
                                : "hover:text-red-400"
                            }`}
                          >
                            {id === "about"
                              ? "About"
                              : id === "what-we-do"
                              ? "What We Do"
                              : "Contact"}
                          </button>
                        </li>
                      ))}
                      {/* ✅ Get Started Button */}
                      <li>
                        <Link
                          to="/newpage"
                          className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
                        >
                          Get Started
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              )}

              {/* Sections */}
              <About />
              <WhatWeDo />
              <Contact />

              {/* Floating 3D Spline */}
              <div className="fixed bottom-0 right-0 z-50 pointer-events-none">
                <div className="h-50 w-50">
{/*                   <Spline scene="https://prod.spline.design/NfwNxDSgByBL4GgB/scene.splinecode" /> */}
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
