import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { role: "user", content: input }]);
    const userMessage = input;
    setInput("");

    const res = await axios.post("/api/chat", { message: userMessage });
    setMessages((prev) => [...prev, { role: "bot", content: res.data.reply }]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role === "user" ? styles.userMsg : styles.botMsg}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className={styles.inputBox}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ketik pesan..." />
        <button onClick={sendMessage}>Kirim</button>
      </div>
    </div>
  );
        }
