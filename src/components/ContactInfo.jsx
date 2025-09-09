import { rgba } from "framer-motion";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center text-black "
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/contact.jpeg')", // your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
        // makes it static
      }}
    >
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 px-6 py-16 ">
        
        {/* Left: Contact Form */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-sky-600">Get in Touch</h2>
          <p className="text-lg text-black">
            Have questions about <span className="text-sky-400 font-semibold">E-Tongue</span>? 
            Fill out the form below and we’ll get back to you soon.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-transparent border border-black text-black placeholder-black rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-transparent border border-black text-black placeholder-black rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-transparent border border-black text-black placeholder-black rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-3 bg-transparent border border-black text-black placeholder-black rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div className="flex flex-col justify-center text-left space-y-8">
          <h2 className="text-4xl font-bold text-sky-600">Contact Information</h2>
          <p className="text-lg text-black">
            We are here to help with all inquiries related to{" "}
            <span className="text-sky-400 font-semibold">Electronic Tongue for Herbal Quality Assessment</span>.
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-sky-400 text-2xl" />
              <span className="text-black">MIET College, Meerut, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-sky-400 text-2xl" />
              <span className="text-black">+91 98xxxxxxxx</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-sky-400 text-2xl" />
              <span className="text-black">info@etongue.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
