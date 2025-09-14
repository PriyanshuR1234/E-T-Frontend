import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Herbal Testing",
      description: "Advanced tools to evaluate herbal quality with precision.",
      icon: "/home.png",
      link: "/newpage", // 🔗 route for herbal testing
    },
    {
      id: 2,
      title: "Calling Agent",
      description: "AI-driven insights to classify and validate herbal extracts.",
      icon: "/bot.png",
      link: "/callbot", // 🔗 route for call bot page
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 flex flex-col items-center text-center text-gray-900 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)), url('/Services.jpeg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-16 text-sky-600 drop-shadow-md">
          Services
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
              onClick={() => navigate(service.link)} // ✅ dynamic navigation
              className="cursor-pointer relative bg-white border border-sky-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transform transition-all duration-300 flex flex-col items-center"
            >
              <div className="h-20 w-20 rounded-full bg-sky-100 flex items-center justify-center mb-6 shadow-inner">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-sky-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
