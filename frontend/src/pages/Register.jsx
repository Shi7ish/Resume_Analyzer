import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800">

        <h1 className="text-3xl font-bold text-white mb-2">
          Create Account
        </h1>

        <p className="text-slate-400 mb-8">
          Start improving your ATS score
        </p>

        <form className="space-y-5">

          <div>
            <label className="block text-slate-300 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-xl transition"
          >
            Register
          </button>

        </form>

        <p className="text-slate-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register
