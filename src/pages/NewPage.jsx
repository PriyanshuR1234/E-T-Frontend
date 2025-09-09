import React, { useState } from "react";

const NewPage = () => {
  const [formData, setFormData] = useState({
    ph: "",
    tds: "",
    orp: "",
    color: "",
    mq3: "",
    mq135: "",
    mq136: "",
    mq138: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Analyzing data: " + JSON.stringify(formData, null, 2));
  };

  return (
    <section
      id="analysis"
      className="relative py-24 min-h-screen flex flex-col items-center justify-center text-gray-900"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('/newPageBG.jpg')",
        backgroundAttachment: "fixed", // 🔑 static background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-4xl w-full px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-10 text-sky-600 text-center">
          Sensor Data Analysis
        </h2>

        {/* Form */}
        <form
          // onSubmit={handleSubmit} 
          action="http://localhost:3000/submit"
          method='Get'
          className="bg-white/40 rounded-2xl shadow-xl p-10 flex flex-col gap-6"
        >
          {/* Sensor Inputs */}
          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              PH-Sensor (Sourness)
            </label>
            <input
              type="text"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
              placeholder="Enter PH-Sensor value"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              TDS-Sensor (Bitterness)
            </label>
            <input
              type="text"
              name="tds"
              value={formData.tds}
              onChange={handleChange}
              placeholder="Enter TDS-Sensor value"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              ORP-Sensor (Saltiness)
            </label>
            <input
              type="text"
              name="orp"
              value={formData.orp}
              onChange={handleChange}
              placeholder="Enter ORP-Sensor value"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              Colour Sensor (Appearance)
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Enter Colour Sensor value"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              MQ-3 (Sweetness)
            </label>
            <input
              type="text"
              name="mq3"
              value={formData.mq3}
              onChange={handleChange}
              placeholder="Enter MQ-3 Sensor value"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              MQ-135 (Aroma)
            </label>
            <input
              type="text"
              name="mq135"
              value={formData.mq135}
              onChange={handleChange}
              placeholder="Enter MQ-135 Sensor value"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              MQ-136 (Aftertaste)
            </label>
            <input
              type="text"
              name="mq136"
              value={formData.mq136}
              onChange={handleChange}
              placeholder="Enter MQ-136 Sensor value"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              MQ-138 (Umami)
            </label>
            <input
              type="text"
              name="mq138"
              value={formData.mq138}
              onChange={handleChange}
              placeholder="Enter MQ-138 Sensor value"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            // type="submit"
            className="mt-6 bg-sky-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-sky-700 transition"
          >
            Analyze
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewPage;
