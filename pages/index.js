import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    console.log("Pesan dikirim:", input);
    setInput("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>ChatGPT Anime</h1>
      <input
        type="text"
        placeholder="Ketik pesan..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "8px 12px" }}>
        Kirim
      </button>
    </div>
  );
}
