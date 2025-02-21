// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Bot, Mail, Lock } from 'lucide-react';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/dashboard');
//   };

//   return (
//     <div className="h-screen overflow-hidden bg-[#0D1117] flex items-center justify-center p-4 overflow-x-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D2432] rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 max-w-full" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2 max-w-full" />
//       <div className="w-full max-w-md space-y-8 relative">
//         <div className="text-center">
//           <div className="flex justify-center mb-4">
//             <Bot size={48} className="text-[#3B82F6]" />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-2">Welcome to Hackathon 9.O!</h2>
//           <p className="text-gray-400">Enter your credentials to access your account</p>
//         </div>

//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <div className="space-y-4">
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 bg-[#1D2432] border border-[#2D3545] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
//                 placeholder="Email address"
//               />
//             </div>

//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 bg-[#1D2432] border border-[#2D3545] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           <div className="text-right">
//             <a href="#" className="text-[#3B82F6] hover:text-blue-400 text-sm transition-colors">
//               Forgot your password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 px-4 bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-center text-gray-400 mt-4">
//           Don't have an account?{' '}
//           <Link to="/signup" className="text-[#3B82F6] hover:text-blue-400 font-medium">
//             Sign up now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bot, Mail, Lock } from "lucide-react";
import { api } from "../../utils/api";
import useAuthStore from "../../store/useAuthStore";
import useUserStore from "../../store/useUserStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { setUser } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/user/signin", {
        email,
        password,
      });
      console.log(res.data);
      setUser(res.data.user);
      login();
      localStorage.setItem("userStore", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data.message);
    }

    navigate("/dashboard");
  };

  return (
    <div className="h-screen overflow-hidden bg-[#0D1117] flex items-center justify-center p-4">
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#1D2432] rounded-full filter blur-3xl opacity-20" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full filter blur-3xl opacity-10" />
      <div className="w-full max-w-md space-y-8 relative">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Bot size={48} className="text-[#3B82F6]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome to Hackathon 9.O!
          </h2>
          <p className="text-gray-400">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1D2432] border border-[#2D3545] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                placeholder="Email address"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1D2432] border border-[#2D3545] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-[#3B82F6] hover:text-blue-400 text-sm transition-colors"
            >
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#3B82F6] hover:text-blue-400 font-medium"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
