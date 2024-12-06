import React, { useState, useRef, useEffect } from "react";
import "../styles/ChatBot.css";

function ChatBot() {
  const [messages, setMessages] = useState([]); // Mesaje
  const [userMessage, setUserMessage] = useState(""); // Mesajul curent al utilizatorului
  const conversationEndRef = useRef(null); // Referință pentru a derula la sfârșitul conversației

  const handleSendMessage = () => {
    if (!userMessage.trim()) return; // Nu trimite mesaje goale

    const newMessages = [
      ...messages,
      { sender: "human", text: userMessage }, // Mesaj utilizator
    ];

    // Generează răspunsul botului
    let botResponse = "Îmi pare rău, nu înțeleg întrebarea.";
    if (userMessage.toLowerCase().includes("salut")) {
      botResponse = "Salut! Cu ce te pot ajuta?";
    } else if (userMessage.toLowerCase().includes("ce faci")) {
      botResponse = "Sunt aici să te ajut!";
    } else if (userMessage.toLowerCase().includes("numele tau")) {
      botResponse = "Eu sunt Horia, asistentul tău virtual.";
    }

    setMessages([
      ...newMessages,
      { sender: "bot", text: botResponse }, // Mesaj bot
    ]);
    setUserMessage(""); // Resetează input-ul
  };

  // Derulează automat la sfârșitul conversației
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <main className="chatBot" id="chatBot">
      <section className="chatbotul">
        <div className="top">DISCUTĂ CU HORIA</div>
        <div className="top-logo" />
        <div className="top-bot-icon" />
        <section className="conversation">
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "bot" ? "bot-message" : "human-message"
              }
            >
              {message.text}
            </div>
          ))}
          {/* Referință pentru scroll */}
          <div ref={conversationEndRef}></div>
        </section>
        <input
          className="input-user"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className="send-btn" onClick={handleSendMessage}>
          Trimite
        </button>
        <div className="bottom">
          Horia te poate ajuta să găsești răspunsul la întrebarea ta! Dacă totuși
          nu l-ai găsit, nu ezita să ne contactezi.
        </div>
      </section>
    </main>
  );
}

export default ChatBot;
