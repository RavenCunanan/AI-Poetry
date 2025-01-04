import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function PoemBox() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userPrompt, setUserPrompt] = useState(""); // State for user input

  const fetchPoem = async (userPrompt) => {
    try {
      // Replace with your own API key in the next line
      const genAI = new GoogleGenerativeAI("");  // <-- Add your API key here
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Make sure we're passing a prompt specifically for poem generation
      const prompt = `Write a short poem based on this prompt: "${userPrompt}"`;
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);  // Set the poem response
    } catch (err) {
      setError("Error generating poem: " + err.message);
    }
  };

  useEffect(() => {
    const clockIntervalId = setInterval(() => setCurrentTime(new Date()), 1000); // Update clock every second

    return () => {
      clearInterval(clockIntervalId); // Cleanup clock interval on component unmount
    };
  }, []);

  const handleGenerate = () => {
    if (userPrompt.trim()) {
      fetchPoem(userPrompt);  // Generate poem based on user input
    } else {
      setError("Please enter a prompt.");
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1>AI Poem Generator</h1>
        <input
          type="text"
          placeholder="Enter a topic or prompt for the poem..."
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={handleGenerate}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Generate Poem
        </button>
      </div>

      <div
        style={{
          maxHeight: "300px", // Set a fixed height for poem container
          overflowY: "auto",  // Allow scrolling if content overflows
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {error ? <p>{error}</p> : <p>{response}</p>}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
}
