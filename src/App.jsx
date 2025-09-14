import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import Spline from "@splinetool/react-spline";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


// Import components
import About from "./components/About";
import WhatWeDo from "./components/Features";
import Contact from "./components/Team";
import Services from "./components/Services";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/footer"; 
import NewPage from "./pages/NewPage"; 
import CallBot from "./pages/CallBot"; // ✅ Import CallBot page

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "what-we-do", "services", "contact"];
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
        {/* ✅ Pages */}
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/callbot" element={<CallBot />} />   {/* ✅ CallBot route */}

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
                  src="/IntroBG.png"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 px-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black flex justify-center flex-wrap text-center">
                    Welcome to{" "}
                    <span className="text-sky-600 flex ml-2">
                      {["E", "-", "T", "o", "n", "g", "u", "e"].map(
                        (char, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: i * 0.2,
                              type: "spring",
                              stiffness: 200,
                              damping: 20,
                            }}
                            className="inline-block"
                          >
                            {char}
                          </motion.span>
                        )
                      )}
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-black px-2">
                    Electronic Tongue for Herbal Quality Assessment
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={() => scrollToSection("what-we-do")}
                      className="px-6 py-3 bg-sky-600 rounded-2xl shadow-lg hover:bg-sky-700 transition w-full sm:w-auto"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="px-6 py-3 bg-transparent border border-black rounded-2xl hover:bg-sky-800 hover:text-white transition w-full sm:w-auto"
                    >
                      <div className="text-black hover:text-white">
                        Contact Us
                      </div>
                    </button>
                  </div>
                </div>

                {/* Jumping Arrow */}
                <div
                  onClick={() => scrollToSection("about")}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-3xl sm:text-4xl text-black cursor-pointer"
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
              <Services />
              <Contact />
              <ContactInfo />
              <Footer /> 

              {/* ✅ Mac Dock Navbar */}
              {/* (your dock code stays same) */}

              {/* Floating 3D Spline */}
              <div className="fixed bottom-0 right-0 z-40">
                <div
                  className="h-32 w-32 sm:h-50 sm:w-50 cursor-pointer"
                  onClick={() => window.location.href = "/callbot"}  // ✅ navigate to CallBot
                >
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
