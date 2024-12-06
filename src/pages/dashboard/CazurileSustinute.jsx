import React from "react";
import NavigationDashboard from "../../components/NavigationDashboard";
import Footer from "../../components/Footer";
import ChatBot from "../../components/ChatBot";
import "../../styles/Dashboard.css";

const CazurileSustinute = () => {
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
            <li><a href="CazurileSustinute"><span className="current-page">Cazurile susținute de mine</span></a></li>
            <li><a href="IntrebariSugestii">Am o întrebare/sugestie</a></li>
            <li><a href="DatePreferinte">Datele și preferințele mele</a></li>
            <li onClick={() =>window.alert('Acum ar trebui sa se delogheze.')} className="logout">Dezautentificare</li>
          </ul>
        </nav>
      </aside>

      {/* Conținutul principal */}
      <section className="dashboard-content">
        <div className="main-padding">
          <div className="butoane-cazuri">
            <div className="butoane-sus">Vreau să anulez o plată</div>
            <div className="butoane-sus">Vreau să schimb datele cardului</div>
            <div className="butoane-lung">Nu au fost găsite tranzacții / Tranzactiile tale le regasesti mai jos</div>
          </div>
        </div>
      </section>
    </div>
    </div>
    <Footer />
  </main>



  );
};

export default CazurileSustinute;
