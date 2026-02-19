"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfidenceCheck() {
  const router = useRouter();

  const [answers, setAnswers] = useState<any>({});
  const [result, setResult] = useState("");
  const [mentorSlug, setMentorSlug] = useState("");

  const questions = [
    { id: "q1", text: "You notice unequal task distribution in your team. What do you do?", skill: "leadership", options: [{ text: "Address it professionally with manager", correct: true }, { text: "Ignore it", correct: false }, { text: "Complain angrily", correct: false }] },
    { id: "q2", text: "You are asked an inappropriate personal question in interview.", skill: "advocacy", options: [{ text: "Redirect conversation to skills confidently", correct: true }, { text: "Answer personally", correct: false }, { text: "Stay silent", correct: false }] },
    { id: "q3", text: "Offered lower pay than a peer. You?", skill: "negotiation", options: [{ text: "Negotiate with performance data", correct: true }, { text: "Accept quietly", correct: false }, { text: "Leave immediately", correct: false }] },
    { id: "q4", text: "Colleague makes biased joke.", skill: "equality", options: [{ text: "Calmly address the issue", correct: true }, { text: "Laugh along", correct: false }, { text: "Ignore", correct: false }] },
    { id: "q5", text: "Your idea is ignored in meeting.", skill: "communication", options: [{ text: "Re-present with clarity & confidence", correct: true }, { text: "Drop it", correct: false }, { text: "Complain later", correct: false }] },
    { id: "q6", text: "Team doubts a woman leader.", skill: "leadership", options: [{ text: "Support her openly", correct: true }, { text: "Stay neutral", correct: false }, { text: "Avoid discussion", correct: false }] },
    { id: "q7", text: "Promotion discussion happening.", skill: "advocacy", options: [{ text: "Highlight achievements confidently", correct: true }, { text: "Wait silently", correct: false }, { text: "Avoid topic", correct: false }] },
  ];

  const mentorNames: any = {
    ananya: "Ananya Sharma", rahul: "Rahul Verma", meera: "Meera Nair",
    arjun: "Arjun Rao", kavya: "Kavya Iyer", riya: "Riya Kapoor", vikram: "Vikram Singh",
  };

  const mentorMapping: any = { leadership: "ananya", negotiation: "rahul", equality: "meera", communication: "arjun", advocacy: "kavya", confidence: "riya", growth: "vikram" };

  const handleSelect = (qid: string, index: number) => {
    setAnswers({ ...answers, [qid]: index });
  };

  const handleSubmit = () => {
    let score = 0;
    let skillScore: any = {};
    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        if (q.options[answers[q.id]].correct) {
          score += 10;
          skillScore[q.skill] = (skillScore[q.skill] || 0) + 1;
        }
      }
    });
    setResult(`Your Score: ${score} / 70`);
    let weakestSkill = Object.keys(skillScore).length > 0 ? Object.keys(skillScore).reduce((a, b) => skillScore[a] < skillScore[b] ? a : b) : "confidence";
    setMentorSlug(mentorMapping[weakestSkill] || "riya");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      /* Cartoon HR/Interview Theme Background */
      backgroundImage: "url('https://img.freepik.com/free-vector/job-interview-concept-illustration_114360-24598.jpg?t=st=1725534000&exp=1725537600&hmac=cartoon_hr_bg')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      fontFamily: "'Outfit', sans-serif"
    }}>
      
      {/* Header with High Visibility */}
      <div style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.9)", 
        padding: "15px 60px", 
        borderRadius: "100px", 
        marginBottom: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ fontSize: "55px", fontWeight: "900", color: "#6a0572", margin: 0 }}>CONFIDENCE CHECK 💜</h1>
      </div>

      {/* Main Center Stage Card */}
      <div style={{
        width: "100%",
        maxWidth: "950px",
        height: "60vh",
        background: "rgba(255, 255, 255, 0.96)",
        borderRadius: "70px",
        padding: "60px",
        boxShadow: "0 40px 100px rgba(0,0,0,0.2)",
        overflowY: "auto",
        border: "8px solid #ffD1E3"
      }}>
        {questions.map((q, qi) => (
          <div key={q.id} style={{ textAlign: "center", marginBottom: "80px" }}>
            {/* Question - Big & Bold */}
            <h2 style={{ fontSize: "38px", fontWeight: "900", color: "#1a1a1a", marginBottom: "35px", lineHeight: "1.2" }}>
              <span style={{ color: "#ff0066" }}>{qi + 1}.</span> {q.text}
            </h2>
            
            {/* Options - Centered Large Pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
              {q.options.map((opt, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(q.id, i)}
                  style={{
                    width: "100%",
                    maxWidth: "700px",
                    padding: "25px 40px",
                    fontSize: "26px",
                    fontWeight: "700",
                    borderRadius: "100px",
                    border: answers[q.id] === i ? "6px solid #6a0572" : "3px solid #eee",
                    background: answers[q.id] === i ? "#f3e5f5" : "white",
                    color: "#333",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    boxShadow: answers[q.id] === i ? "0 10px 20px rgba(106, 5, 114, 0.2)" : "none",
                  }}
                >
                  {opt.text}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Big Action Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: "25px 100px",
              fontSize: "32px",
              fontWeight: "900",
              borderRadius: "100px",
              border: "none",
              background: "linear-gradient(135deg, #6a0572, #dd2476)",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 20px 40px rgba(106, 5, 114, 0.4)"
            }}
          >
            Calculate Results 🚀
          </button>
        </div>
      </div>

      {/* Result Card - Emerges in Center */}
      {result && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "600px",
          background: "#1a1a1a",
          padding: "60px",
          borderRadius: "80px",
          textAlign: "center",
          zIndex: 100,
          border: "5px solid #ffD1E3",
          boxShadow: "0 0 100px rgba(0,0,0,0.5)"
        }}>
          <h2 style={{ fontSize: "50px", fontWeight: "900", color: "#FFD1E3" }}>{result}</h2>
          <p style={{ fontSize: "24px", color: "#fff", marginTop: "20px" }}>🌟 TOP MATCH MENTOR</p>
          <p style={{ fontSize: "30px", fontWeight: "800", color: "#FFF5B8", margin: "10px 0" }}>{mentorNames[mentorSlug]}</p>
          <button
            onClick={() => router.push(`/mentor/${mentorSlug}`)}
            style={{
              marginTop: "30px",
              padding: "20px 50px",
              fontSize: "24px",
              borderRadius: "50px",
              border: "none",
              background: "#ff0066",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Start Mentorship
          </button>
          <button onClick={() => setResult("")} style={{ display: "block", margin: "20px auto 0", color: "#777", background: "none", border: "none", cursor: "pointer" }}>Close</button>
        </div>
      )}
    </div>
  );
}