import React from "react";
import { Bot } from "lucide-react";
import bg from "../../assets/bg.mp4";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <div className="relative min-h-screen flex items-center">
        <video
          className="pt-12 absolute inset-0 object-cover w-full h-full"
          src={bg}
          autoPlay
          loop
          muted
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617]/80 to-[#020617]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="absolute top-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-12 w-12 text-blue-500" />
              </div>
            </div>
          </nav>

          <div className="text-center pt-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
                HACKATHON 9.0
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
              Brought to you by UPES-CSI
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join the next generation of innovators in the largest AI &
              IOT-focused hackathon
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <Link to="/login">Register Now</Link>
              </button>

              <button className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <Link to="/about">Learn More</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
      </div>
    </div>
  );
}

export default App;
