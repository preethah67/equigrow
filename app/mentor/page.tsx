"use client";
import Image from "next/image";

export default function MentorPage() {
  const mentors = [
    {
      name: "Riya Sharma",
      role: "Leadership & Confidence Coach",
      experience: "12 Years Experience",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      name: "Arjun Mehta",
      role: "Tech Career Strategist",
      experience: "10 Years Experience",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    },
    {
      name: "Ananya Rao",
      role: "Workplace Equality Specialist",
      experience: "9 Years Experience",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
    {
      name: "Rahul Verma",
      role: "Interview & Hiring Mentor",
      experience: "11 Years Experience",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Sneha Kapoor",
      role: "Confidence Building Mentor",
      experience: "8 Years Experience",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Vikram Iyer",
      role: "Resume & Career Coach",
      experience: "13 Years Experience",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    },
    {
      name: "Meera Nair",
      role: "Women in STEM Advocate",
      experience: "7 Years Experience",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    },
    {
      name: "Karan Malhotra",
      role: "Professional Growth Mentor",
      experience: "14 Years Experience",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        background:
          "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee, #fddb92)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bold",
          color: "#6a0dad",
          marginBottom: "15px",
        }}
      >
        🌸 EQUIGROW – Mentor Match
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "24px",
          marginBottom: "50px",
          color: "#333",
        }}
      >
        SDG 5 – Gender Equality | Skill-First Fair Guidance
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
        }}
      >
        {mentors.map((mentor, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              border: "5px solid #ff69b4",
            }}
          >
            <Image
              src={`${mentor.img}?auto=format&fit=crop&w=400&q=80`}
              alt={mentor.name}
              width={220}
              height={220}
              style={{
                borderRadius: "15px",
                marginBottom: "25px",
              }}
            />

            <h2
              style={{
                fontSize: "30px",
                color: "#ff1493",
                marginBottom: "10px",
              }}
            >
              {mentor.name}
            </h2>

            <p
              style={{
                fontSize: "22px",
                color: "#4b0082",
                marginBottom: "8px",
              }}
            >
              {mentor.role}
            </p>

            <p
              style={{
                fontSize: "20px",
                color: "#ff4500",
                fontWeight: "bold",
              }}
            >
              {mentor.experience}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}