import React, { useState } from "react";

import { motion } from "framer-motion";

import { Lock } from "lucide-react";

import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(

        "https://ai-finance-assistant-h0bd.onrender.com/api/auth/login",

        {
          email,
          password
        }

      );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        response.data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-blue-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl w-[420px]"
      >

        {/* Icon */}
        <div className="flex justify-center mb-6">

          <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">

            <Lock size={40} className="text-white" />

          </div>

        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-300 text-center mt-2 mb-8">
          Login to your Finance AI account
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-2xl bg-slate-900/70 text-white border border-slate-700 outline-none mb-4 focus:border-blue-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-2xl bg-slate-900/70 text-white border border-slate-700 outline-none mb-6 focus:border-blue-500"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 duration-300 p-4 rounded-2xl text-white font-semibold shadow-lg"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-300 mt-6">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Register
          </Link>

        </p>

      </motion.div>

    </div>
  );
};

export default Login;