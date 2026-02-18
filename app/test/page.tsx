"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfidenceCheck() {
  const router = useRouter();

  const [answers, setAnswers] = useState<any>({});
  const [result, setResult] = useState("");
  const [mentorSlug, setMentorSlug] = useState("");

  const questions = [
    {
      id: "q1",
      text: "You notice unequal task distribution in your team. What do you do?",
      skill: "leadership",
      options: [
        { text: "Address it professionally with manager", correct: true },
        { text: "Ignore it", correct: false },
        { text: "Complain angrily", correct: false },
      ],
    },
    {
      id: "q2",
      text: "You are asked an inappropriate personal question in interview.",
      skill: "advocacy",
      options: [
        { text: "Redirect conversation to skills confidently", correct: true },
        { text: "Answer personally", correct: false },
        { text: "Stay silent", correct: false },
      ],
    },
    {
      id: "q3",
      text: "Offered lower pay than a peer. You?",
      skill: "negotiation",
      options: [
        { text: "Negotiate with performance data", correct: true },
        { text: "Accept quietly", correct: false },
        { text: "Leave immediately", correct: false },
      ],
    },
    {
      id: "q4",
      text: "Colleague makes biased joke.",
      skill: "equality",
      options: [
        { text: "Calmly address the issue", correct: true },
        { text: "Laugh along", correct: false },
        { text: "Ignore", correct: false },
      ],
    },
    {
      id: "q5",
      text: "Your idea is ignored in meeting.",
      skill: "communication",
      options: [
        { text: "Re-present with clarity & confidence", correct: true },
        { text: "Drop it", correct: false },
        { text: "Complain later", correct: false },
      ],
    },
    {
      id: "q6",
      text: "Team doubts a woman leader.",
      skill: "leadership",
      options: [
        { text: "Support her openly", correct: true },
        { text: "Stay neutral", correct: false },
        { text: "Avoid discussion", correct: false },
      ],
    },
    {
      id: "q7",
      text: "Promotion discussion happening.",
      skill: "advocacy",
      options: [
        { text: "Highlight achievements confidently", correct: true },
        { text: "Wait silently", correct: false },
        { text: "Avoid topic", correct: false },
      ],
    },
  ];

  const mentorMapping: any = {
    leadership: "ananya",
    negotiation: "rahul",
    equality: "meera",
    communication: "arjun",
    advocacy: "kavya",
    confidence: "riya",
    growth: "vikram",
  };

  const mentorNames: any = {
    ananya: "Ananya Sharma – Women Leadership Coach",
    rahul: "Rahul Verma – Corporate Negotiation Expert",
    meera: "Meera Nair – Workplace Equality Advisor",
    arjun: "Arjun Rao – Public Speaking Mentor",
    kavya: "Kavya Iyer – Career Confidence Strategist",
    riya: "Riya Kapoor – Self-Belief Coach",
    vikram: "Vikram Singh – Career Growth Mentor",
  };

  const handleSelect = (qid: string, index: number) => {
    setAnswers({ ...answers, [qid]: index });
  };

  const handleSubmit = () => {
    let score = 0;
    let skillScore: any = {};

    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        const chosen = q.options[answers[q.id]];
        if (chosen.correct) {
          score += 10;
          skillScore[q.skill] = (skillScore[q.skill] || 0) + 1;
        }
      }
    });

    setResult(`Your Confidence Score: ${score} / 70`);

    let weakestSkill =
      Object.keys(skillScore).length > 0
        ? Object.keys(skillScore).reduce((a, b) =>
            skillScore[a] < skillScore[b] ? a : b
          )
        : "confidence";

    const recommendedSlug =
      mentorMapping[weakestSkill] || "riya";

    setMentorSlug(recommendedSlug);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        background:
          "linear-gradient(135deg,#fbc2eb,#a6c1ee,#ffecd2,#fcb69f)",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "50px", color: "#6a0572" }}>
        CONFIDENCE CHECK 💜
      </h1>

      <p style={{ fontSize: "24px", marginBottom: "30px" }}>
        Choose the best answer to measure your workplace readiness.
      </p>

      {questions.map((q, qi) => (
        <div key={q.id} style={{ marginTop: "40px" }}>
          <h2 style={{ fontSize: "28px" }}>
            {qi + 1}. {q.text}
          </h2>

          {q.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => handleSelect(q.id, i)}
              style={{
                marginTop: "15px",
                padding: "20px",
                fontSize: "22px",
                borderRadius: "15px",
                border:
                  answers[q.id] === i
                    ? "4px solid #6a0572"
                    : "3px solid #ff6ec4",
                background: "white",
                cursor: "pointer",
              }}
            >
              {opt.text}
            </div>
          ))}
        </div>
      ))}

      {/* Center Button */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: "18px 40px",
            fontSize: "24px",
            borderRadius: "15px",
            border: "none",
            background:
              "linear-gradient(90deg,#ff512f,#dd2476)",
            color: "white",
            cursor: "pointer",
          }}
        >
          Check My Confidence 🚀
        </button>
      </div>

      {/* Result Section */}
      {result && (
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "70%",
              background: "white",
              padding: "40px",
              borderRadius: "25px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "36px", color: "#6a0572" }}>
              {result}
            </h2>

            <h3
              style={{
                fontSize: "28px",
                marginTop: "20px",
                color: "#dd2476",
              }}
            >
              🌟 Recommended Mentor
            </h3>

            <p style={{ fontSize: "26px", marginTop: "15px" }}>
              {mentorNames[mentorSlug]}
            </p>

            <button
              onClick={() =>
                router.push(`/mentors/${mentorSlug}`)
              }
              style={{
                marginTop: "25px",
                padding: "15px 35px",
                fontSize: "20px",
                borderRadius: "12px",
                border: "none",
                background:
                  "linear-gradient(90deg,#6a11cb,#2575fc)",
                color: "white",
                cursor: "pointer",
              }}
            >
              Connect With Mentor
            </button>
          </div>
        </div>
      )}
    </div>
  );
}