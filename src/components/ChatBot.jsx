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
    let botResponse = "Imi pare rau, nu inteleg intrebarea.";

    if (userMessage.toLowerCase().includes("donatii")) {
      botResponse = "Da, poti opta pentru donatii recurente. Acceseaza sectiunea Doneaza, selecteaza optiunea „Donatie recurenta” si stabileste frecventa (zilnica, saptamanala sau lunara). Vei primi o notificare inainte de fiecare donatie automata.";
    } else if (userMessage.toLowerCase().includes("statut")) {
      botResponse = "Poti verifica statutul donatiei din contul tau, in sectiunea „Istoric donatii.” Acolo vei gasi detalii despre fiecare tranzactie, inclusiv starea acesteia.";
    } else if (userMessage.toLowerCase().includes("valute")) {
      botResponse = "Da, acceptam donatii in mai multe valute, inclusiv EUR si USD. Metoda de plata selectata va converti suma automat, conform cursului de schimb al bancii tale.";
    } else if (userMessage.toLowerCase().includes("varsta")) {
      botResponse = "Voluntarii trebuie sa aiba cel putin 16 ani. Pentru minorii intre 16 si 18 ani, este necesar acordul scris al unui parinte sau tutore legal.";
    } else if (userMessage.toLowerCase().includes("oras")) {
      botResponse = "Da, iti poti selecta activitatile si locatiile disponibile. Daca este necesar, Hands on Hope poate oferi cazare temporara pentru voluntari in anumite situatii.";
    } else if (userMessage.toLowerCase().includes("instruire")) {
      botResponse = "Instruirile se desfasoara online sau fizic, in functie de tipul activitatilor. Vei primi informatii detaliate despre siguranta, responsabilitati si logistica necesara inainte de eveniment.";
    } else if (userMessage.toLowerCase().includes("solicitare")) {
      botResponse = "De obicei, procesam solicitarile in 24-48 de ore. In situatii de urgenta, echipa noastra prioritizeaza solicitarile critice.";
    } else if (userMessage.toLowerCase().includes("colaborati")) {
      botResponse = "Da, colaboram cu organizatii locale si internationale pentru a extinde sprijinul oferit si a ne asigura ca fiecare comunitate primeste ajutorul de care are nevoie.";
    } else if (userMessage.toLowerCase().includes("datele")) {
      botResponse = "Dupa stergerea contului, datele tale sunt eliminate definitiv din baza noastra de date in termen de 30 de zile, conform politicii noastre de confidentialitate.";
    } else if (userMessage.toLowerCase().includes("problema") || userMessage.toLowerCase().includes("probleme")) {
      botResponse = "Poti raporta orice problema prin sectiunea Contact, completand formularul „Probleme de confidentialitate.” Echipa noastra de suport va raspunde in cel mai scurt timp.";
    } else if (userMessage.toLowerCase().includes("email")) {
      botResponse = "Daca nu mai ai acces la adresa de email, contacteaza echipa noastra de suport.";
    } else if (userMessage.toLowerCase().includes("recurent") || userMessage.toLowerCase().includes("doneaza")) {
      botResponse = "Da, poti opta pentru donatii recurente. Acceseaza sectiunea Doneaza, selecteaza optiunea „Donatie recurenta” si stabileste frecventa (zilnica, saptamanala sau lunara). Vei primi o notificare inainte de fiecare donatie automata.";
    } else if (userMessage.toLowerCase().includes("cum fac") || userMessage.toLowerCase().includes("donatie")) {
      botResponse = "Poti face o donatie direct pe site-ul nostru, accesand sectiunea Doneaza. Avem mai multe metode disponibile: transfer bancar, card de credit sau PayPal. Daca ai nevoie de ajutor, sunt aici sa te ghidez!";
    } else if (userMessage.toLowerCase().includes("fiscal") || userMessage.toLowerCase().includes("chitanta")) {
      botResponse = "Da, Hands on Hope emite chitante fiscale pentru donatiile tale. Dupa ce finalizezi donatia, poti solicita chitanta prin sectiunea „Istoric donatii” din contul tau sau contactandu-ne.";
    } else if (userMessage.toLowerCase().includes("folosite") || userMessage.toLowerCase().includes("rapoarte")) {
      botResponse = "Iti multumim pentru sprijinul tau! In fiecare luna, publicam rapoarte detaliate in sectiunea Ce diferenta au facut donatiile tale. Poti accesa istoricul donatiilor tale din contul tau pentru detalii personalizate.";
    } else if (userMessage.toLowerCase().includes("voluntar") || userMessage.toLowerCase().includes("inscriere")) {
      botResponse = "Poti deveni voluntar completand formularul din sectiunea Voluntariat. Vom reveni cu un raspuns rapid si informatii despre oportunitatile disponibile.";
    } else if (userMessage.toLowerCase().includes("activitati") || userMessage.toLowerCase().includes("ajut")) {
      botResponse = "Voluntarii Hands on Hope ajuta cu distribuirea ajutoarelor, construirea adaposturilor temporare si oferirea de suport logistic sau psihologic. Vom gasi impreuna activitatea care ti se potriveste!";
    } else if (userMessage.toLowerCase().includes("experienta") || userMessage.toLowerCase().includes("instruit")) {
      botResponse = "Nu este necesara experienta! Te vom instrui inainte de a participa la orice activitate. Tot ce ai nevoie este dorinta de a ajuta si o atitudine pozitiva.";
    } else if (userMessage.toLowerCase().includes("ajutor") || userMessage.toLowerCase().includes("comunitate")) {
      botResponse = "Daca stii o comunitate sau persoane afectate de un dezastru natural, te rugam sa ne contactezi prin formularul din sectiunea Contact. Echipa noastra analizeaza fiecare solicitare si raspunde prompt.";
    } else if (userMessage.toLowerCase().includes("sprijin") || userMessage.toLowerCase().includes("ajutoare")) {
      botResponse = "Oferim alimente, apa, adaposturi temporare, produse de igiena, truse medicale si asistenta psihologica. Interventiile noastre se bazeaza pe nevoile fiecarei comunitati.";
    } else if (userMessage.toLowerCase().includes("date") || userMessage.toLowerCase().includes("confidentialitate")) {
      botResponse = "Respectam toate normele de confidentialitate si utilizam cele mai sigure metode pentru protejarea datelor tale. Poti citi mai multe in sectiunea Politica de confidentialitate.";
    } else if (userMessage.toLowerCase().includes("modific") || userMessage.toLowerCase().includes("detalii")) {
      botResponse = "Da, poti actualiza informatiile din contul tau Hands on Hope. Acceseaza sectiunea Detalii cont pentru a face modificarile necesare.";
    } else if (userMessage.toLowerCase().includes("cont") || userMessage.toLowerCase().includes("creeaza")) {
      botResponse = "Pentru a crea un cont, acceseaza butonul Inregistreaza-te din coltul dreapta sus al paginii si completeaza formularul cu numele, adresa de email si o parola sigura. Este usor si dureaza doar cateva minute!";
    } else if (userMessage.toLowerCase().includes("parola") || userMessage.toLowerCase().includes("reset")) {
      botResponse = "Daca ai uitat parola, acceseaza link-ul Am uitat parola de pe pagina de autentificare. Introdu adresa de email asociata contului si vei primi un link pentru a reseta parola.";
    } else if (userMessage.toLowerCase().includes("schimba parola")) {
      botResponse = "Pentru a schimba parola, conecteaza-te la contul tau si acceseaza sectiunea Detalii cont. De acolo, vei putea actualiza parola in cativa pasi simpli.";
    } else if (userMessage.toLowerCase().includes("activitate suspecta") || userMessage.toLowerCase().includes("securitate")) {
      botResponse = "Daca observi activitate suspecta, schimba imediat parola din sectiunea Detalii cont. Contacteaza echipa noastra la adresa support@handsonhope.org pentru ajutor suplimentar.";
    } else if (userMessage.toLowerCase().includes("sterge") || userMessage.toLowerCase().includes("anuleaza cont")) {
      botResponse = "Da, poti solicita stergerea contului tau prin formularul de contact din sectiunea Contact. Echipa noastra va procesa cererea in cel mai scurt timp.";
    } else if (userMessage.toLowerCase().includes("actualizez") || userMessage.toLowerCase().includes("informatii personale")) {
      botResponse = "Informatiile personale, cum ar fi numele, adresa de email sau numarul de telefon, pot fi actualizate din sectiunea Detalii cont. Asigura-te ca salvezi modificarile la final.";
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
