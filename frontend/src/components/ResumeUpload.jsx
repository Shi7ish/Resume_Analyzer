import API from "../services/api";

import {
  UploadCloud,
  FileText,
  X,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { useRef, useState } from "react";

const ResumeUpload = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [analysisComplete, setAnalysisComplete] = useState(false);

  const [atsScore, setAtsScore] = useState(null);

  const [matchedSkills, setMatchedSkills] = useState([]);

  const [missingSkills, setMissingSkills] = useState([]);

  const fileInputRef = useRef();

  const handleFileChange = (file) => {

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF and DOCX files are allowed");
      return;
    }

    setSelectedFile(file);

    uploadFile(file);
  };

  const uploadFile = async (file) => {

    try {

      setLoading(true);

      setAnalysisComplete(false);

      const formData = new FormData();

      formData.append("file", file);

      const response = await API.post(
        "/api/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded successfully:", response.data);

      const data = response.data;

      setAtsScore(data.atsScore);

      setMatchedSkills(data.matchedSkills);

      setMissingSkills(data.missingSkills);

      setLoading(false);

      setAnalysisComplete(true);

    } catch (error) {

      console.log(error);

      console.log(error.response);

      console.log(error.message);

      setLoading(false);

      alert("Upload failed");

    }
  };

  const removeFile = () => {

    setSelectedFile(null);

    setAnalysisComplete(false);

    setLoading(false);

    setAtsScore(null);

    setMatchedSkills([]);

    setMissingSkills([]);
  };

  return (
    <div className="space-y-6">

      {/* Upload Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

        {!selectedFile ? (

          <div
            onClick={() => fileInputRef.current.click()}
            className="border-2 border-dashed border-slate-700 rounded-2xl p-16 text-center cursor-pointer hover:border-cyan-500 transition"
          >

            <UploadCloud
              size={60}
              className="mx-auto text-cyan-400 mb-5"
            />

            <h2 className="text-2xl font-semibold mb-3 text-white">
              Upload Your Resume
            </h2>

            <p className="text-slate-400 mb-6">
              Drag & drop or click to upload PDF/DOCX
            </p>

            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold transition">
              Choose File
            </button>

            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept=".pdf,.docx"
              onChange={(e) => handleFileChange(e.target.files[0])}
            />

          </div>

        ) : (

          <div className="bg-slate-800 rounded-2xl p-6 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="bg-cyan-500/10 p-4 rounded-xl">
                <FileText className="text-cyan-400" size={30} />
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {selectedFile.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>

              </div>

            </div>

            <button
              onClick={removeFile}
              className="text-red-400 hover:text-red-300"
            >
              <X size={24} />
            </button>

          </div>

        )}

      </div>

      {/* Loading */}
      {loading && (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">

          <Loader2
            size={50}
            className="animate-spin mx-auto text-cyan-400 mb-5"
          />

          <h2 className="text-2xl font-semibold text-white mb-3">
            Analyzing Resume...
          </h2>

          <p className="text-slate-400">
            Comparing resume with ATS requirements
          </p>

        </div>

      )}

      {/* Results */}
      {analysisComplete && (

        <div className="space-y-6">

          {/* ATS Score */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <CheckCircle2
              size={60}
              className="mx-auto text-green-400 mb-5"
            />

            <h2 className="text-3xl font-bold text-white mb-3">
              ATS Score
            </h2>

            <div className="text-7xl font-bold text-cyan-400 mb-4">
              {atsScore}%
            </div>

            <p className="text-slate-400">
              Your resume matches ATS requirements.
            </p>

          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Matched Skills */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

              <h2 className="text-2xl font-semibold text-white mb-5">
                Matched Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {matchedSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* Missing Skills */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

              <h2 className="text-2xl font-semibold text-white mb-5">
                Missing Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {missingSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ResumeUpload;