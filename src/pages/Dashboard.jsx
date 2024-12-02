import React from "react";
import NavigationDashboard from "../components/NavigationDashboard";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";


const Dashboard = () => {
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
              <li><a href="/cazurile-mele"><span className="current-page">Contul meu</span></a></li>
              <li><a href="/cazurile-mele">Cazurile susținute de mine</a></li>
              <li><a href="/intrebari">Am o întrebare/sugestie</a></li>
              <li><a href="/date-preferinte">Datele și preferințele mele</a></li>
              <li><a href="/logout">Dezautentificare</a></li>
            </ul>
          </nav>
        </aside>

        {/* Conținutul principal */}
        <section className="dashboard-content">
          <p>
            Îți mulțumim că ai ales să le oferi oamenilor ajutorul tău, <b>acolo unde este mai mare nevoie!</b>
          </p>
          <p>
            De asemenea, te invităm să fii voluntar HandsOnHope completând formularul de <a href="/voluntar">aici</a>, 
            pentru a putea aduce împreună zâmbete!
          </p>

          <div className="cases-list">
            {/* Cardurile pentru cazuri */}
            <div className="case-card">
              <p>O familie cu 5 copii și-a pierdut casa într-un incendiu. Donațiile colectate sunt folosite pentru materiale de construcție și reabilitarea locuinței, astfel încât familia să poată petrece iarna într-un mediu sigur.</p>
              <button>Donează pentru acest caz</button>
            </div>
            <div className="case-card">
              <p>Gabriela a suferit multiple fracturi și are nevoie de proteze și terapie de recuperare, costurile ridicându-se la 25.000 de euro. Fondurile colectate vor acoperi intervențiile chirurgicale și tratamentul pentru a putea merge din nou.</p>
              <button>Donează pentru acest caz</button>
            </div>
            <div className="case-card">
              <p>O tânără care necesită 20.000 de euro pentru o intervenție chirurgicală în străinătate. Campania este activă pentru a colecta suma necesară tratamentului, care poate salva viața fetei.</p>
              <button>Donează pentru acest caz</button>
            </div>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </main>


  );
};

export default Dashboard;
