'use client';

import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Spinner Component
function Spinner({ size = 5, color = 'white' }) {
  return (
    <svg
      className={`animate-spin h-${size} w-${size} text-${color}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      />
    </svg>
  );
}

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.number.trim() ||
      !formData.message.trim()
    ) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!/^\d{10}$/.test(formData.number)) {
      toast.warning('Phone number must be exactly 10 digits.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      toast.success('Message sent successfully!');
      setSubmitted(true);
      setFormData({ name: '', email: '', number: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      toast.error('Failed to send message.');
      console.error('Submission Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-7xl mx-auto bg-black text-white"
      data-aos="fade-up"
    >
      <h2 className="text-5xl font-extrabold mb-12 text-center text-indigo-600 drop-shadow-sm">
        Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div
          className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-xl p-8 md:p-12"
          data-aos="fade-right"
        >
          {submitted && (
            <div className="flex items-center justify-center mb-6 p-4 bg-green-100 text-green-800 rounded-xl shadow">
              <FiCheckCircle className="text-2xl mr-2" />
              <span>Your message has been sent!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {['name', 'email', 'number', 'message'].map((field) => {
              const isMessage = field === 'message';
              const type = field === 'email' ? 'email' : 'text';

              return (
                <div className="relative" key={field}>
                  {isMessage ? (
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="message "
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="peer w-full p-4 bg-white/80 text-gray-900 rounded-2xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none transition"
                    />
                  ) : (
                    <input
                      type={type}
                      name={field}
                      placeholder=" "
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="peer w-full p-4 bg-white/80 text-gray-900 rounded-2xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                    />
                  )}
                  <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-indigo-500">
                    {field === 'number'
                      ? ''
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                </div>
              );
            })}

            <button
              type="submit"
              disabled={loading}
              className={`mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-2xl font-semibold shadow-md hover:from-purple-500 hover:to-indigo-500 transform hover:scale-105 transition duration-300 ${
                loading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <Spinner size={5} color="white" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

        {/* Map */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl border-4 border-indigo-300 h-[400px]"
          data-aos="fade-left"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2159741648423!2d78.45718417597612!3d17.43941818338242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974b6e2a78a9%3A0x90b1909a14b2ef9e!2sSaboo%20Towers%2C%20Jaffar%20Ali%20Bagh%20Rd%2C%20Matha%20Nagar%2C%20Somajiguda%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1715252289622!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
