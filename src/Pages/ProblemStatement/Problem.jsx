// import React, { useState } from 'react';
// import { FaStethoscope, FaTree, FaGraduationCap, FaChartLine, FaCity, FaShieldAlt, FaUsers, FaSearch } from 'react-icons/fa';

// const ProblemStatements = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const problemStatements = [
//     {
//       title: 'Medical Diagnosis Assistant',
//       description: 'Develop an AI system that assists healthcare professionals in early disease detection and diagnosis using medical imaging data.',
//       teamSize: '2-4',
//       tags: ['Healthcare', 'AI'],
//       icon: <FaStethoscope className="text-blue-500 text-3xl" />,
//     },
//     {
//       title: 'Carbon Footprint Optimizer',
//       description: 'Create an AI solution that helps organizations optimize their operations to reduce carbon emissions and environmental impact.',
//       teamSize: '3-5',
//       tags: ['Sustainability', 'Environment'],
//       icon: <FaTree className="text-green-500 text-3xl" />,
//     },
//     {
//       title: 'Personalized Learning Platform',
//       description: 'Build an AI-driven education platform that adapts to individual learning styles and provides personalized content recommendations.',
//       teamSize: '2-4',
//       tags: ['Edtech', 'AI'],
//       icon: <FaGraduationCap className="text-yellow-500 text-3xl" />,
//     },
//     {
//       title: 'Smart Investment Advisor',
//       description: 'Develop an AI system that provides personalized investment recommendations based on user goals and risk tolerance.',
//       teamSize: '3-4',
//       tags: ['Finance', 'AI'],
//       icon: <FaChartLine className="text-purple-500 text-3xl" />,
//     },
//     {
//       title: 'Urban Mobility Optimizer',
//       description: 'Create an AI solution for optimizing traffic flow and public transportation routes in real-time to reduce congestion.',
//       teamSize: '3-5',
//       tags: ['Urban', 'AI'],
//       icon: <FaCity className="text-teal-500 text-3xl" />,
//     },
//     {
//       title: 'Threat Detection System',
//       description: 'Build an AI-powered system that can detect and prevent cyber threats in real-time using advanced pattern recognition.',
//       teamSize: '2-4',
//       tags: ['Cybersecurity', 'AI'],
//       icon: <FaShieldAlt className="text-red-500 text-3xl" />,
//     },
//   ];

//   const filteredStatements = problemStatements.filter(statement =>
//     statement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     statement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     statement.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   return (
//     <div className="bg-gray-900 min-h-screen py-10 flex flex-col items-center">
//       <h2 className="text-4xl font-bold mb-8 text-white">Problem Statements</h2>

//       <h3 className="text-lg text-gray-400 mb-8 text-center max-w-3xl mx-auto px-4 sm:px-6">
//   Choose from a variety of problem statements in different domains
// </h3>

//       <div className="w-full px-4 sm:px-6 max-w-3xl">
//         <div className="relative mb-8">
//           <input
//             type="text"
//             placeholder="Search problem statements..."
//             className="w-full p-4 pl-12 pr-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out mx-auto"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-screen-xl">
//         {filteredStatements.map((statement, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
//           >
//             {/* Tags */}
//             <div className="absolute top-4 left-4 flex flex-wrap gap-2">
//               {statement.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-gray-700 text-gray-200 text-xs font-semibold py-1 px-3 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="mt-11 flex items-center mb-4">
//               {statement.icon}
//               <h3 className="text-xl font-semibold ml-4 text-white">{statement.title}</h3>
//             </div>
//             <p className="text-gray-400 text-sm mb-4">{statement.description}</p>
//             <div className="flex items-center justify-between mt-4">
//               <div className="flex items-center">
//                 <FaUsers className="text-gray-300 text-lg mr-2" />
//                 <span className="text-sm text-gray-300">Team Size:</span>
//                 <span className="text-sm font-semibold ml-1 text-white">{statement.teamSize}</span>
//               </div>
//               <button className="inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-md bg-[#5AA5CD] hover:bg-[#4794B8] transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#5AA5CD]">
//                 View Details
//                 <svg
//                   className="ml-2 w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProblemStatements;
import React, { useState } from "react";
import {
  FaStethoscope,
  FaTree,
  FaGraduationCap,
  FaChartLine,
  FaCity,
  FaShieldAlt,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

const ProblemStatements = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatement, setSelectedStatement] = useState(null);

  const problemStatements = [
    {
      title: "Medical Diagnosis Assistant",
      description:
        "Develop an AI system that assists healthcare professionals in early disease detection and diagnosis using medical imaging data.",
      teamSize: "2-4",
      tags: ["Healthcare", "AI"],
      icon: <FaStethoscope className="text-blue-500 text-3xl" />,
      details: {
        description:
          "Develop an innovative AI-powered system capable of early disease detection using medical imaging and patient data. The solution should improve diagnostic accuracy and reduce detection time.",
        requirements: [
          "Machine learning model for image analysis",
          "Patient data processing system",
          "User-friendly interface for medical professionals",
          "Privacy and security compliance",
        ],
        resources: [
          "Dataset Access",
          "API Documentation",
          "Technical Guidelines",
        ],
        mentors: ["Dr. Sarah Chen", "Prof. James Miller"],
      },
    },
    {
      title: "Carbon Footprint Optimizer",
      description:
        "Create an AI solution that helps organizations optimize their operations to reduce carbon emissions and environmental impact.",
      teamSize: "3-5",
      tags: ["Sustainability", "Environment"],
      icon: <FaTree className="text-green-500 text-3xl" />,
      details: {
        description:
          "Design an innovative AI-powered tool to minimize carbon footprints by analyzing and optimizing energy usage and resource consumption across various operations.",
        requirements: [
          "Environmental impact data analysis",
          "Optimization algorithms for energy and resource use",
          "User dashboard for actionable insights",
          "Scalability and adaptability to various industries",
        ],
        resources: [
          "Dataset Access",
          "API Documentation",
          "Technical Guidelines",
        ],
        mentors: ["Dr. Emily Carter", "Mr. Michael Green"],
      },
    },
    {
      title: "Personalized Learning Platform",
      description:
        "Build an AI-driven education platform that adapts to individual learning styles and provides personalized content recommendations.",
      teamSize: "2-4",
      tags: ["Edtech", "AI"],
      icon: <FaGraduationCap className="text-yellow-500 text-3xl" />,
      details: {
        description:
          "Develop a platform that leverages AI to create tailored learning experiences, adapting to individual student needs and preferences for optimal outcomes.",
        requirements: [
          "AI models for adaptive learning",
          "Content recommendation system",
          "Analytics for student performance tracking",
          "Interactive and user-friendly UI",
        ],
        resources: [
          "Dataset Access",
          "API Documentation",
          "Technical Guidelines",
        ],
        mentors: ["Dr. Susan Lee", "Prof. Thomas Brown"],
      },
    },
    {
      title: "Smart Investment Advisor",
      description:
        "Develop an AI system that provides personalized investment recommendations based on user goals and risk tolerance.",
      teamSize: "3-4",
      tags: ["Finance", "AI"],
      icon: <FaChartLine className="text-purple-500 text-3xl" />,
      details: {
        description:
          "Build an AI-driven investment advisor to guide users in making informed decisions by analyzing market trends, user preferences, and risk profiles.",
        requirements: [
          "Market trend prediction algorithms",
          "Portfolio optimization tools",
          "Risk assessment models",
          "User-friendly investment dashboard",
        ],
        resources: [
          "Dataset Access",
          "Financial Reports",
          "Technical Guidelines",
        ],
        mentors: ["Dr. Alan White", "Mr. David Johnson"],
      },
    },
    {
      title: "Urban Mobility Optimizer",
      description:
        "Create an AI solution for optimizing traffic flow and public transportation routes in real-time to reduce congestion.",
      teamSize: "3-5",
      tags: ["Urban", "AI"],
      icon: <FaCity className="text-teal-500 text-3xl" />,
      details: {
        description:
          "Develop a real-time AI system to improve urban mobility by optimizing traffic and public transportation routes, reducing congestion and travel time.",
        requirements: [
          "Traffic pattern analysis models",
          "Real-time data processing",
          "Route optimization algorithms",
          "Integration with city infrastructure",
        ],
        resources: ["Traffic Data API", "GIS Tools", "Technical Guidelines"],
        mentors: ["Dr. Laura Adams", "Mr. James Hill"],
      },
    },
    {
      title: "Threat Detection System",
      description:
        "Build an AI-powered system that can detect and prevent cyber threats in real-time using advanced pattern recognition.",
      teamSize: "2-4",
      tags: ["Cybersecurity", "AI"],
      icon: <FaShieldAlt className="text-red-500 text-3xl" />,
      details: {
        description:
          "Develop an advanced AI-based cybersecurity solution to detect and mitigate potential threats in real-time, ensuring robust data protection.",
        requirements: [
          "Threat detection and pattern recognition algorithms",
          "Real-time monitoring and alerts",
          "Incident response mechanisms",
          "Integration with existing security systems",
        ],
        resources: [
          "Cyber Threat Dataset",
          "API Documentation",
          "Technical Guidelines",
        ],
        mentors: ["Dr. Rachel Smith", "Mr. Mark Anderson"],
      },
    },
    // Add other problem statements here...
  ];

  const filteredStatements = problemStatements.filter(
    (statement) =>
      statement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      statement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      statement.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className="bg-gray-900 min-h-screen py-10 flex flex-col items-center">
      <h2 className="pt-12 text-4xl font-bold mb-8 text-white">
        Problem Statements
      </h2>

      <h3 className="text-lg text-gray-400 mb-8 text-center max-w-3xl mx-auto px-4 sm:px-6">
        Choose from a variety of problem statements in different domains
      </h3>

      <div className="w-full px-4 sm:px-6 max-w-3xl">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search problem statements..."
            className="w-full p-4 pl-12 pr-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out mx-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-screen-xl">
        {filteredStatements.map((statement, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
          >
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {statement.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-200 text-xs font-semibold py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-11 flex items-center mb-4">
              {statement.icon}
              <h3 className="text-xl font-semibold ml-4 text-white">
                {statement.title}
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {statement.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <FaUsers className="text-gray-300 text-lg mr-2" />
                <span className="text-sm text-gray-300">Team Size:</span>
                <span className="text-sm font-semibold ml-1 text-white">
                  {statement.teamSize}
                </span>
              </div>
              <button
                onClick={() => setSelectedStatement(statement)}
                className="inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-md bg-[#5AA5CD] hover:bg-[#4794B8] transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#5AA5CD]"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedStatement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-white">
                {selectedStatement.title}
              </h3>
              <button
                onClick={() => setSelectedStatement(null)}
                className="text-gray-400 hover:text-gray-200 transition"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-400 mb-4">
              {selectedStatement.details.description}
            </p>
            <h4 className="text-lg font-semibold text-white">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-400 mb-4">
              {selectedStatement.details.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold text-white">Resources:</h4>
            <div className="flex gap-4 mb-4">
              {selectedStatement.details.resources.map((resource, i) => (
                <button
                  key={i}
                  className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
                >
                  {resource}
                </button>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-white">Mentors:</h4>
            <p className="text-gray-400">
              {selectedStatement.details.mentors.join(", ")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemStatements;
