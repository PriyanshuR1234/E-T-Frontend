import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { FaBolt, FaShieldAlt, FaUsers, FaRobot } from "react-icons/fa";

const CallBotPage = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showContent, setShowContent] = useState(false);
  const numberSectionRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // numeric only
    setPhoneNumber(value);
  };

  const handleStartCall = async () => {
    if (!phoneNumber) {
      alert("Please enter a phone number!");
      return;
    }

    const fullNumber = `${countryCode}${phoneNumber}`;
    try {
      const response = await fetch("https://etongue-mid-call.onrender.com/call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: fullNumber }),
      });

      if (response.ok) {
        alert(`📞 Call started to: ${fullNumber}`);
      } else {
        const err = await response.json();
        alert(`❌ Error: ${err.message || "Failed to start call"}`);
      }
    } catch (error) {
      alert("⚠️ Server not reachable!");
      console.error(error);
    }
  };

  const handleSplineClick = () => {
    setShowContent(true);
    // scroll so phone number input comes in middle of screen
    setTimeout(() => {
      numberSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: "url('/callpageBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/80 via-sky-950/80 to-black/90" />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-500 drop-shadow-lg"
        >
          Change the World with <br /> Voice AI Calls
        </motion.h1>

        <p className="text-lg sm:text-xl text-sky-100 max-w-2xl mb-12">
          E-Tongue Call Assistant brings futuristic, AI-powered, human-like voice interactions directly to your phone.
        </p>

        {/* Spline container */}
<div
  className="relative w-full max-w-3xl h-[420px] cursor-pointer"
  onClick={handleSplineClick}
>
  <Spline scene="https://prod.spline.design/WJV01XyGl2oYA3sF/scene.splinecode" />

  {/* bottom-right corner CTA overlay */}
  <div className="absolute bottom-3 right-3 px-6 py-2 mr-2 rounded-xl 
                  bg-gradient-to-r from-sky-700 via-sky-600 to-blue-700 
                  text-white font-semibold text-lg shadow-lg
                  flex items-center justify-center 
                  hover:scale-105 transition-transform">
    🚀 Try Now
  </div>
</div>

      </section>

      {/* HIDDEN SECTIONS */}
      {showContent && (
        <>
          {/* Input + Button */}
          <section
            ref={numberSectionRef}
            className="mt-12 flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-lg z-10"
          >
            {/* Country Code Selector */}
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white/80 text-gray-900 text-md font-medium border border-sky-300 focus:ring-2 focus:ring-sky-400"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
            </select>

            <motion.input
              type="tel"
              inputMode="numeric"
              placeholder="📞 Phone number"
              value={phoneNumber}
              onChange={handleInputChange}
              whileFocus={{ scale: 1.03 }}
              className="flex-1 px-4 py-2 rounded-xl text-gray-900 text-md
                       bg-white/80 backdrop-blur-md border border-sky-300
                       focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-600"
            />

            <motion.button
              onClick={handleStartCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-xl font-bold text-md text-white
                       bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700
                       shadow-md hover:shadow-xl transition"
            >
              🚀 Call
            </motion.button>
          </section>

          {/* FEATURES */}
          <section className="py-24 px-6 bg-gradient-to-b from-sky-950/90 to-sky-800/90 relative z-10">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-sky-300">
              Why Choose E-Tongue AI Calls?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {[
                { icon: <FaBolt size={40} className="text-sky-300" />, title: "92% Faster", desc: "Streamlined and productive AI-powered calling." },
                { icon: <FaShieldAlt size={40} className="text-sky-300" />, title: "Secure & Reliable", desc: "Your data and calls are safe with enterprise-grade security." },
                { icon: <FaUsers size={40} className="text-sky-300" />, title: "Human-like", desc: "Natural responses that feel engaging and personal." },
                { icon: <FaRobot size={40} className="text-sky-300" />, title: "Powered by AI", desc: "Cutting-edge neural voice AI ensures realism and accuracy." },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md border border-sky-700"
                >
                  <div className="mb-4 flex justify-center">{f.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-sky-100 text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-12 text-center bg-sky-900/80 backdrop-blur-xl z-10">
            <p className="text-sky-100">© 2025 E-Tongue Call Assistant · Designed By 💙 HYPERLOOP</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default CallBotPage;
