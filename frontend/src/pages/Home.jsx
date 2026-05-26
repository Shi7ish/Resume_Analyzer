import { FileText, Brain, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          ResumeAI
        </h1>

        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full mb-6">
          AI Powered ATS Resume Scanner
        </div>

        <h1 className="text-6xl font-bold max-w-4xl leading-tight">
          Analyze Your Resume <br />
          and Improve Your ATS Score
        </h1>

        <p className="text-slate-400 text-lg mt-6 max-w-2xl">
          Upload your resume, compare it against job descriptions,
          identify missing skills, and boost your chances of getting shortlisted.
        </p>

        <div className="flex gap-4 mt-10">
          <button onClick={() => navigate("/dashboard")} className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition cursor-pointer">
            Upload Resume
          </button>

          <button className="px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition">
          <FileText size={40} className="text-cyan-400 mb-4" />

          <h2 className="text-2xl font-semibold mb-3">
            Resume Parsing
          </h2>

          <p className="text-slate-400">
            Extract skills, education, projects, and experience automatically from resumes.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition">
          <Brain size={40} className="text-cyan-400 mb-4" />

          <h2 className="text-2xl font-semibold mb-3">
            AI Suggestions
          </h2>

          <p className="text-slate-400">
            Get intelligent recommendations to improve your resume quality and ATS ranking.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition">
          <BarChart3 size={40} className="text-cyan-400 mb-4" />

          <h2 className="text-2xl font-semibold mb-3">
            ATS Score Analysis
          </h2>

          <p className="text-slate-400">
            Compare resumes with job descriptions and identify missing keywords instantly.
          </p>
        </div>

      </section>
    </div>
  );
}

export default Home;