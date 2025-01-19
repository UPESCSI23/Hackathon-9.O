import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          About Us
        </h1>
        <p className="text-lg leading-relaxed text-center mb-8">
          Hackathon 9.0 is an innovative event powered by{" "}
          <span className="text-blue-400 font-semibold">UPES-CSI</span>, 
          bringing together the brightest minds to create solutions for real-world challenges. 
          It’s more than just a competition—it’s a celebration of technology, creativity, 
          and collaboration.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
            Our Vision
          </h2>
          <p className="text-base leading-relaxed text-center">
            To empower the next generation of innovators by fostering creativity, 
            collaboration, and technical excellence. We aim to bridge the gap between 
            emerging technologies and their real-world applications.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
            Why Hackathon 9.0?
          </h2>
          <p className="text-base leading-relaxed text-center">
            Whether you’re here to learn, compete, or network, Hackathon 9.0 offers 
            something for everyone. It’s your chance to showcase your skills, 
            gain industry exposure, and make a difference.
          </p>
        </div>
        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
