import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-6 pt-28">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-blue-500 tracking-wide drop-shadow-lg">
            Welcome to Hackathon 9.0
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            The ultimate innovation playground where developers, designers, and
            creators come together to build cutting-edge solutions using{" "}
            <span className="text-blue-400 font-semibold">AI</span> and{" "}
            <span className="text-purple-400 font-semibold">IoT</span>. Join us
            to learn, compete, and create real-world impact.
          </p>

          {/* <div className="space-y-4">
            <a
              href="#vision"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </a>
          </div> */}
        </div>

        {/* Vision Section */}
        <div
          id="vision"
          className="relative bg-gray-800 p-12 rounded-2xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg pointer-events-none"></div>
          <div className="relative space-y-6">
            <h2 className="text-4xl font-bold text-center text-blue-400">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Empowering innovators to create sustainable and impactful
              solutions through collaborative problem-solving and cutting-edge
              technology. Hackathon 9.0 brings together bright minds to explore
              the future of AI and IoT.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Collaborate",
              description:
                "Join forces with creative minds from diverse fields to develop ground-breaking solutions.",
              icon: "🤝",
            },
            {
              title: "Innovate",
              description:
                "Tackle real-world challenges using the latest in AI and IoT technologies.",
              icon: "🚀",
            },
            {
              title: "Compete",
              description:
                "Showcase your skills and win exciting prizes while making a real-world impact.",
              icon: "🏆",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center space-y-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 py-12 px-8 rounded-2xl shadow-xl text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-white">
            Why Choose Hackathon 9.0?
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Hackathon 9.0 isn’t just a competition—it's an unforgettable
            experience! Gain hands-on experience, network with top industry
            professionals, and create impactful solutions that could change the
            world.
          </p>
          <div className="space-y-4">
            <a
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
