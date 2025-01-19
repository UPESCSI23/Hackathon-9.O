import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-6 pt-28">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 tracking-wide drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Have questions or need help? We’d love to hear from you! Fill out
            the form below, or reach out through our contact details, and we’ll
            get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-blue-400">Email Us</h3>
              <p className="text-gray-300 mt-2"> upescsi@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-blue-400">Call Us</h3>
              <p className="text-gray-300 mt-2">+91 1234567890</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-blue-400">Visit Us</h3>
              <p className="text-gray-300 mt-2">
              UPES BIDHOLI, PREM NAGAR, DEHRADUN
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
  <iframe
    title="location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.710957264507!2d77.96426167619147!3d30.415941600872767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e0!3m2!1sen!2sin!4v1737310361608!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-2xl"
  ></iframe>
</div>

      </div>
    </div>
  );
};

export default Contact;
