import React, { useState } from "react";

const NewPage = () => {
  const [formData, setFormData] = useState({
    ph: "",
    tds: "",
    orp: "",
    color_r: "",
    color_g: "",
    color_b: "",
    bme688: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const mappedData = {
      ph: parseFloat(formData.ph),
      tds: parseFloat(formData.tds),
      orp: parseFloat(formData.orp),
      color_r: parseFloat(formData.color_r),
      color_g: parseFloat(formData.color_g),
      color_b: parseFloat(formData.color_b),
      bme688: parseFloat(formData.bme688),
    };

    try {
      const res = await fetch("http://localhost:3000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mappedData),
      });

      const data = await res.json();

      // Ensure fallback values for blank data
      setResult({
        predicted_product: data.predicted_product || "N/A",
        overall_match: data.overall_match ?? 0,
        overall_impurity: data.overall_impurity ?? 0,
        sensor_matches: data.sensor_matches || {},
        taste_profile: data.taste_profile || {},
        standard_profile: data.standard_profile || {},
        charts: data.charts || {},
        note: data.note || "No expert note available.",
      });
    } catch (err) {
      console.error("Error fetching analysis:", err);
      setResult({ error: "Failed to fetch results" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="analysis"
      className="relative py-24 min-h-screen flex flex-col items-center justify-center text-gray-900"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('/newPageBG.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-4xl w-full px-6">
        <h2 className="text-4xl font-extrabold mb-10 text-sky-600 text-center">
          Sensor Data Analysis
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/40 rounded-2xl shadow-xl p-10 flex flex-col gap-6"
        >
          {[
            { name: "ph", label: "PH-Sensor (Sourness)" },
            { name: "tds", label: "TDS-Sensor (Bitterness)" },
            { name: "orp", label: "ORP-Sensor (Saltiness)" },
          ].map((input) => (
            <div key={input.name}>
              <label className="block text-sky-700 font-semibold mb-2">
                {input.label}
              </label>
              <input
                type="number"
                step="any"
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                placeholder={`Enter ${input.label} value`}
                className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>
          ))}

          {/* Colour Sensor (R, G, B) */}
          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              Colour Sensor (RGB)
            </label>
            <div className="grid grid-cols-3 gap-4">
              {["color_r", "color_g", "color_b"].map((c) => (
                <input
                  key={c}
                  type="number"
                  step="any"
                  name={c}
                  value={formData[c]}
                  onChange={handleChange}
                  placeholder={c.toUpperCase()}
                  className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
              ))}
            </div>
          </div>

          {/* BME688 */}
          <div>
            <label className="block text-sky-700 font-semibold mb-2">
              BME688 Sensor
            </label>
            <input
              type="number"
              step="any"
              name="bme688"
              value={formData.bme688}
              onChange={handleChange}
              placeholder="Enter BME688 reading"
              className="w-full border border-gray-600 placeholder:text-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-sky-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-sky-700 transition"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        {/* Results */}
        {result && (
          <div className="mt-10 bg-white/60 rounded-xl shadow-md p-6">
            {result.error ? (
              <p className="text-red-600">{result.error}</p>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-sky-700 mb-4">
                  Analysis Results
                </h3>

                {/* Input Values */}
                <h4 className="font-semibold mb-2">Input Values:</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b py-1">
                      <span className="font-medium">{key.toUpperCase()}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Predicted Standard Profile */}
                <h4 className="mt-4 font-semibold mb-2">
                  Predicted Product Values:
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {result.standard_profile &&
                    Object.entries(result.standard_profile).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b py-1">
                        <span className="font-medium">{key}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                </div>

                <p className="mb-4">
                  <strong>Predicted Product:</strong> {result.predicted_product}
                </p>
                <p className="mb-4">
                  <strong>Overall Match:</strong> {result.overall_match}%
                </p>
                <p className="mb-4">
                  <strong>Overall Impurity:</strong> {result.overall_impurity}%
                </p>

                {/* Sensor Match Percentages */}
                <h4 className="mt-4 font-semibold mb-2">Sensor Match Percentages:</h4>
                <ul className="list-disc pl-6 mb-4">
                  {result.sensor_matches &&
                    Object.entries(result.sensor_matches).map(([k, v]) => (
                      <li key={k}>
                        {k}: {v}%
                      </li>
                    ))}
                </ul>

                {/* Taste Profile Percentages */}
                <h4 className="mt-4 font-semibold mb-2">Taste Profile Percentages:</h4>
                <ul className="list-disc pl-6 mb-4">
                  {result.taste_profile &&
                    Object.entries(result.taste_profile).map(([k, v]) => (
                      <li key={k}>
                        {k}: {v}%
                      </li>
                    ))}
                </ul>

                {/* Charts */}
                {result.charts && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(result.charts).map(([name, img_b64]) => (
                      <img
                        key={name}
                        src={`data:image/png;base64,${img_b64}`}
                        alt={name}
                        className="rounded shadow"
                      />
                    ))}
                  </div>
                )}

                {/* Expert Note */}
                {result.note && (
                  <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h4 className="font-bold text-yellow-700 text-xl mb-4">Expert Note</h4>
                    {result.note.split("\n").map((line, idx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return null;

                      if (trimmed.includes(":")) {
                        const [subheading, ...rest] = trimmed.split(":");
                        return (
                          <div key={idx} className="mb-3">
                            <h5 className="font-semibold text-yellow-800 text-lg flex items-start">
                              <span className="mr-2 text-yellow-700">•</span> {subheading}
                            </h5>
                            <p className="text-gray-800 leading-relaxed">{rest.join(":").trim()}</p>
                          </div>
                        );
                      } else {
                        return (
                          <p key={idx} className="text-gray-800 mb-2 leading-relaxed">
                            {trimmed}
                          </p>
                        );
                      }
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewPage;
