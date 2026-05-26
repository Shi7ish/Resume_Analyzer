import React from 'react'
import ResumeUpload from "../components/ResumeUpload";
import {
  LayoutDashboard,
  Upload,
  FileText,
  BarChart3,
  LogOut,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 hidden md:block">

        <h1 className="text-3xl font-bold text-cyan-400 mb-10">
          ResumeAI
        </h1>

        <nav className="space-y-4">

          <div className="flex items-center gap-3 bg-cyan-500/10 text-cyan-400 px-4 py-3 rounded-xl">
            <LayoutDashboard size={20} />
            Dashboard
          </div>

          <div className="flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl cursor-pointer transition">
            <Upload size={20} />
            Upload Resume
          </div>

          <div className="flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl cursor-pointer transition">
            <FileText size={20} />
            Analyses
          </div>

          <div className="flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl cursor-pointer transition">
            <BarChart3 size={20} />
            Analytics
          </div>

        </nav>

        <div className="absolute bottom-10">
          <button className="flex items-center gap-2 text-red-400 hover:text-red-300">
            <LogOut size={18} />
            Logout
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="text-slate-400 mt-2">
              Track and improve your ATS resume score
            </p>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold transition">
            Upload Resume
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Total Resumes
            </p>

            <h2 className="text-4xl font-bold">
              12
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Average ATS Score
            </p>

            <h2 className="text-4xl font-bold text-cyan-400">
              82%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Missing Skills Found
            </p>

            <h2 className="text-4xl font-bold text-red-400">
              24
            </h2>
          </div>

        </div>

        {/* Upload Section */}
        <ResumeUpload />

        {/* Recent Analyses */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Recent Analyses
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl">
              <div>
                <p className="font-medium">
                  frontend_resume.pdf
                </p>

                <p className="text-slate-400 text-sm">
                  Uploaded 2 hours ago
                </p>
              </div>

              <div className="text-cyan-400 font-bold text-xl">
                85%
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl">
              <div>
                <p className="font-medium">
                  java_backend_resume.pdf
                </p>

                <p className="text-slate-400 text-sm">
                  Uploaded yesterday
                </p>
              </div>

              <div className="text-yellow-400 font-bold text-xl">
                72%
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  )
}

export default Dashboard
