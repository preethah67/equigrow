"use client";
import { useState, useEffect } from "react";

export default function BiasScanner() {
  const [text, setText] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [showWords, setShowWords] = useState(false);

  const genderWords: { [key: string]: string } = {
    aggressive: "driven",
    dominant: "confident",
    competitive: "goal-oriented",
    emotional: "empathetic",
    bossy: "leadership-oriented",
    sensitive: "thoughtful",
    fearless: "courageous",
    strongman: "strong leader",
    manpower: "workforce",
    women: "candidates",
    men: "professionals",
  };

  useEffect(() => {
    const found: string[] = [];

    Object.keys(genderWords).forEach((word) => {
      if (text.toLowerCase().includes(word)) {
        found.push(
          `⚠ "${word}" → Suggested replacement: "${genderWords[word]}"`
        );
      }
    });

    if (text.length === 0) {
      setResults([]);
    } else if (found.length === 0) {
      setResults(["✅ Inclusive language detected. No bias found."]);
    } else {
      setResults(found);
    }
  }, [text]);

  const biasCount = results.filter((r) => r.includes("⚠")).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 30px",
        background:
          "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee, #ffe29f)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Girl (Top Right) */}
      <img
        src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif"
        width="180"
        style={{
          position: "absolute",
          top: 20,
          right: 30,
          animation: "float 4s ease-in-out infinite",
        }}
      />

      {/* Animated Boy (Bottom Left) */}
      {/* HR reviewing resume */}
<img
  src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
  width="160"
  style={{
    position: "static",
    top: 30,
    right: 40,
    opacity: 0.85,
    animation: "float 4s ease-in-out infinite",
  }}
/>

{/* Interview discussion */}
<img
  src="https://cdn-icons-png.flaticon.com/512/1995/1995470.png"
  width="170"
  style={{
    position: "static",
    bottom: 40,
    left: 40,
    opacity: 0.85,
    animation: "float 5s ease-in-out infinite",
  }}
/>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ff0066",
          }}
        >
          SDG 5 – GENDER EQUALITY
        </h3>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            background:
              "linear-gradient(90deg, #ff512f, #dd2476, #8e2de2, #00c6ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          BIAS SCANNER
        </h1>

        <p style={{ fontSize: "26px", marginTop: "20px" }}>
          Real-time AI detection of gender-coded language to eliminate hidden
          hiring bias.
        </p>
      </div>

      {/* Scanner Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Input */}
        <div
          style={{
            width: "500px",
            background: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <h2 style={{ fontSize: "28px" }}>Input Text</h2>

          <textarea
            rows={8}
            placeholder='Try: "We need an aggressive and dominant woman leader..."'
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: "90%",
              padding: "20px",
              fontSize: "22px",
              borderRadius: "18px",
              border: "3px solid #ff66cc",
              marginTop: "15px",
            }}
          />
        </div>

        {/* Output */}
        <div
          style={{
            width: "500px",
            background:
              "linear-gradient(135deg, #a1c4fd, #c2e9fb, #fbc2eb)",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <h2 style={{ fontSize: "28px" }}>Inclusive Output</h2>

          {results.map((res, index) => (
            <p
              key={index}
              style={{
                fontSize: "22px",
                marginTop: "12px",
                color: res.includes("⚠") ? "#ff0000" : "green",
                fontWeight: "bold",
              }}
            >
              {res}
            </p>
          ))}

          {text.length > 0 && (
            <div style={{ marginTop: "25px", fontSize: "24px" }}>
              <b style={{ color: biasCount > 0 ? "red" : "green" }}>
                {biasCount > 0
                  ? `${biasCount} Bias Word(s) Detected`
                  : "0 Bias Words Detected"}
              </b>
            </div>
          )}
        </div>
      </div>

      {/* More Words Toggle */}
      <div style={{ marginTop: "70px", textAlign: "center" }}>
        <button
          onClick={() => setShowWords(!showWords)}
          style={{
            padding: "18px 35px",
            fontSize: "22px",
            borderRadius: "15px",
            border: "none",
            background:
              "linear-gradient(90deg, #ff9966, #ff5e62)",
            color: "white",
            cursor: "pointer",
          }}
        >
          {showWords ? "Hide Biased Words" : "More Biased Words"}
        </button>

        {showWords && (
          <div
            style={{
              marginTop: "25px",
              fontSize: "22px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {Object.keys(genderWords).map((word, index) => (
              <span
                key={index}
                style={{
                  background: "white",
                  padding: "12px 25px",
                  borderRadius: "25px",
                  color: "#ff0066",
                  fontWeight: "bold",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Floating Animation Keyframe */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}
