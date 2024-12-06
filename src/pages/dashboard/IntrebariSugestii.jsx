import React from "react";
import NavigationDashboard from "../../components/NavigationDashboard";
import Footer from "../../components/Footer";
import "../../styles/Dashboard.css";
import horia from "../../images/horia.png";
import ChatBot from "../../components/ChatBot";


const IntrebariSugestii = () => {
  return (

      <main className="dashboard">
      <NavigationDashboard />
      <header className="dashboard-header">
        <p><i>Este chiar tu cel care solicită ajutorul? </i><a href="/solicita-ajutor"><button className="solicita-ajutor">Click aici</button></a></p>
      </header>

      <div className="padding">
      <h1 className="dashboard-title">Salutare, <span className="titlu-highlight">NUME USER!</span></h1>
      <div className="dashboard-container">
        {/* Panoul lateral */}
        <aside className="dashboard-sidebar">
          <div className="user-info">
            <h2>NUME USER</h2>
            <p>membru din zz/ll/aaaa</p>
          </div>

          <nav className="sidebar-menu">
          <ul>
            <li><a href="../Dashboard">Contul meu</a></li>
            <li><a href="CazurileSustinute">Cazurile susținute de mine</a></li>
            <li><a href="IntrebariSugestii"><span className="current-page">Am o întrebare/sugestie</span></a></li>
            <li><a href="DatePreferinte">Datele și preferințele mele</a></li>
            <li onClick={() =>window.alert('Acum ar trebui sa se delogheze.')} className="logout">Dezautentificare</li>
          </ul>
        </nav>
        </aside>

        {/* Conținutul principal */}
        <section className="dashboard-content">
        <p style={{ textAlign: "center", fontStyle:"italic" }}>
          Ai întrebări? Suntem aici să răspundem!
        </p> <br />
        <p>
          Poti gasi toate detaliile contactului HandsOnHope aici.
        </p><br />
        <p>
          De asemenea, asistentul nostru online, Horia, este aici pentru a raspunde intrebarilor tale sau pentru a primi sugestii.         
        </p>

        <img src={horia} style={{width:"70%", margin: "2% 15%"}}/>
        </section>
      </div>
      </div>

      <ChatBot />
      <Footer />
    </main>


  );
};




export default IntrebariSugestii;
