import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bot, Mail, Lock, User } from "lucide-react";
import { server1 } from "../../server";
import useAuthStore from "../../store/useAuthStore";
import useUserStore from "../../store/useUserStore";
import { api } from "../../utils/api";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true); // Default to true to prevent unnecessary errors
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuthStore();
  const { setUser } = useUserStore();

  useEffect(() => {
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordMatch) return; // Prevent form submission if passwords don't match
    // Add your signup logic here
    try {
      const res = await api.post("/user/signup", {
        fullName,
        email,
        password,
      });

      console.log(res.data);
      setUser(res.data.user);
      localStorage.setItem("userStore", JSON.stringify(res.data.user));
      login();

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Blur Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1D2432] rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Bot size={48} className="text-[#3B82F6]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Participate in Hackathon 9.O!
          </h2>
          <p className="text-gray-400">
            Create your account and start your Hackathon
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1D2432] border border-[#2D3545] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                placeholder="Full Name"
              />
            </div>

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

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1D2432] border border-[#2D3545] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-white placeholder-gray-400"
                placeholder="Confirm Password"
              />
            </div>

            {/* Password Match Indicator */}
            {!passwordMatch && (
              <p className="text-red-500 text-sm">Passwords do not match.</p>
            )}
            {passwordMatch && confirmPassword && (
              <p className="text-green-500 text-sm">Passwords match!</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!passwordMatch} // Disable button if passwords do not match
            className={`w-full py-3 px-4 ${
              passwordMatch
                ? "bg-[#3B82F6] hover:bg-blue-600"
                : "bg-gray-600 cursor-not-allowed"
            } text-white font-semibold rounded-lg transition-colors duration-200`}
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#3B82F6] hover:text-blue-400 font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
