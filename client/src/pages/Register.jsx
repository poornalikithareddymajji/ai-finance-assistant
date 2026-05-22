import React, { useState } from "react";

import { motion } from "framer-motion";

import { UserPlus } from "lucide-react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const response = await axios.post(

        "http://localhost:5000/api/auth/register",

        {
          name,
          email,
          password
        }

      );

      alert(response.data.message);

      navigate("/");

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-blue-950 overflow-hidden">

      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 top-10 right-10"></div>

      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-10 left-10"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl w-[420px]"
      >

        <div className="flex justify-center mb-6">

          <div className="bg-purple-600 p-4 rounded-2xl">

            <UserPlus size={40} className="text-white" />

          </div>

        </div>

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-300 text-center mt-2 mb-8">
          Join Finance AI today
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-2xl bg-slate-900/70 text-white border border-slate-700 outline-none mb-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-2xl bg-slate-900/70 text-white border border-slate-700 outline-none mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-2xl bg-slate-900/70 text-white border border-slate-700 outline-none mb-6"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 duration-300 p-4 rounded-2xl text-white font-semibold"
        >
          Register
        </button>

      </motion.div>

    </div>
  );
};

export default Register;