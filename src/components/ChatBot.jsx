import React, { useState, useRef, useEffect } from "react";
import "../styles/ChatBot.css";

function ChatBot() {
  const toggleChatBot = () => {
    const chatBotBtn = document.querySelector(".chatBot-btn");
    const chatBot = document.querySelector("#chatBot");

    // Ascunde butonul și afișează chatbot-ul
    if (chatBotBtn && chatBot) {
      chatBotBtn.style.display = "none";
      chatBot.style.display = "block";
      chatBot.style.animation = "fade 1s 1";
    }
  };
  
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bună! Sunt Horia, asistentul tău virtual de la HandsOnHope, cu ce te pot ajuta?" },
  ]); // Mesaje inițiale
  const [userMessage, setUserMessage] = useState(""); // Mesajul utilizatorului
  const [isTyping, setIsTyping] = useState(false); // Stare pentru animația de tastare
  const conversationEndRef = useRef(null); // Referință pentru scroll

  const handleSendMessage = () => {
    if (!userMessage.trim()) return; // Nu trimite mesaje goale

    // Adaugă mesajul utilizatorului
    const newMessages = [{ sender: "human", text: userMessage }];
    setMessages(newMessages); // Afișează doar mesajul utilizatorului
    setUserMessage(""); // Resetează input-ul

    // Activează animația de tastare
    setIsTyping(true);

    // Generează răspunsul botului
    let botResponse = "Îmi pare rău, nu înțeleg întrebarea.";
    if (userMessage.toLowerCase().includes("salut")) {
      botResponse = "Salut! Cu ce te pot ajuta?";
    } else if (userMessage.toLowerCase().includes("ce faci")) {
      botResponse = "Sunt aici să te ajut!";
    } else if (userMessage.toLowerCase().includes("numele tau")) {
      botResponse = "Eu sunt Horia, asistentul tău virtual.";
    }

    // După 1 secundă, afișează răspunsul botului
    setTimeout(() => {
      setMessages([
        { sender: "human", text: userMessage },
        { sender: "bot", text: botResponse },
      ]); // Păstrează doar ultimele două mesaje
      setIsTyping(false); // Dezactivează animația de tastare
    }, 1000);
  };

  // Derulează automat la sfârșitul conversației
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <main>
    <div className="chatBot-btn" id="chatBot-btn" onClick={toggleChatBot}></div>
    <main className="chatBot" id="chatBot" style={{ display: "none" }}>
      <section className="chatbotul">
        <div className="x-button"         onClick={(e) => {
          const chatBotBtn = document.querySelector("#chatBot-btn");
          const chatBot = document.querySelector("#chatBot");
          chatBotBtn.style.display = "block"; // Ascunde butonul
          chatBot.style.display = "none"; // Afișează chatbot-ul
        }}>✖</div>
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
          {/* Animație de tastare */}
          {isTyping && (
            <div className="bot-message typing">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          )}
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
          nu l-ai găsit, nu ezita să ne <a href="../Contact"><b style={{ color: "green" , cursor: "pointer"}}>contactezi</b></a>.
        </div>
      </section>
    </main>
    </main>
  );
}

export default ChatBot;
