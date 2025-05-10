"use client";

import { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.number.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.number)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", number: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-7xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-5xl font-extrabold mb-12 text-center text-indigo-600">
        Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div
          className="bg-white bg-opacity-30 backdrop-blur-xl rounded-3xl shadow-2xl p-10 relative"
          data-aos="fade-right"
        >
          {submitted && (
            <div className="flex items-center justify-center mb-6 p-4 bg-green-200 text-green-800 rounded-xl shadow animate-pulse">
              <FiCheckCircle className="text-2xl mr-2" />
              <span>Your message has been sent successfully!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {["name", "email", "number", "message"].map((field) =>
              field !== "message" ? (
                <div className="relative" key={field}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder=" "
                    value={formData[field]}
                    onChange={handleChange}
                    className="peer p-4 w-full rounded-2xl bg-white bg-opacity-70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-400 border shadow transition"
                    required
                  />
                  <label className="absolute left-4 top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-indigo-500">
                    {field === "number"
                      ? "Phone Number (10 digits)"
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                </div>
              ) : (
                <div className="relative" key={field}>
                  <textarea
                    name="message"
                    placeholder=" "
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="peer p-4 w-full rounded-2xl bg-white bg-opacity-70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-indigo-400 border shadow resize-none transition"
                    required
                  />
                  <label className="absolute left-4 top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-indigo-500">
                    Message
                  </label>
                </div>
              )
            )}

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-2xl shadow-xl hover:from-purple-500 hover:to-indigo-500 transform hover:-translate-y-1 hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

       {/* Map Section */}
       <div
  className="rounded-3xl overflow-hidden shadow-2xl border-4 border-indigo-300"
  data-aos="fade-left"
>
  <iframe
    title="Google Map"
    width="100%"
    height="100%"
    className="h-full min-h-[400px]"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2159741648423!2d78.45718417597612!3d17.43941818338242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974b6e2a78a9%3A0x90b1909a14b2ef9e!2sSaboo%20Towers%2C%20Jaffar%20Ali%20Bagh%20Rd%2C%20Matha%20Nagar%2C%20Somajiguda%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1715252289622!5m2!1sen!2sin"
  ></iframe>
</div>


      </div>
    </section>
  );
}
