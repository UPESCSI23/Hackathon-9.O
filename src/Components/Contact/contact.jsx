import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Get in Touch
        </h1>
        <p className="text-lg text-center leading-relaxed mb-8">
          Have questions or need assistance? Feel free to reach out to us. We're here 
          to help you make the most of your Hackathon experience.
        </p>
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-8">
          <p>
            Or email us directly at: 
            <a href="mailto:contact@upescsi.com" className="text-blue-400">
              contact@upescsi.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
