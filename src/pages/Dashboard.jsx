import React from "react";
import NavigationDashboard from "../components/NavigationDashboard";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";
import ChatBot from "../components/ChatBot";
import p1 from "../images/case.jpg";


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
            <li><a href="Dashboard"><span className="current-page">Contul meu</span></a></li>
            <li><a href="dashboard/CazurileSustinute">Cazurile susținute de mine</a></li>
            <li><a href="dashboard/IntrebariSugestii">Am o întrebare/sugestie</a></li>
            <li><a href="dashboard/DatePreferinte">Datele și preferințele mele</a></li>
            <li onClick={() =>window.alert('Acum ar trebui sa se delogheze.')} className="logout">Dezautentificare</li>
          </ul>
        </nav>
        </aside>

        {/* Conținutul principal */}
        <section className="dashboard-content">
        <p className="textt">
            Iti multumim ca ai ales sa le oferi oamenilor ajutorul tau cand este mai mare nevoie!
          </p>
          <p className="textt"><br />
          De asemenea, te invitam sa fii voluntar HandsOnHope completand formularul de  <a href="Voluntariat"><span style={{ color: "green" , cursor: "pointer"}}>aici</span></a>, pentru a putea aduce impreuna zambete!
          </p>
          <p className="textt"><br />
          Din contul tau, poti afla detalii despre actiunile pe care le realizezi, sa administrezi datele personale si sa editezi datele contului tau.
          </p><br />

          <p style={{ textAlign: "left"}}>
              Iata cazurile noastre:
            </p>
          <div className="cases-list">
            {/* Cardurile pentru cazuri */}

            <div className="case-card">
            <div className="image-container">
              <img src={p1} />
            </div>
              <p>O familie cu 5 copii și-a pierdut casa într-un incendiu. Donațiile colectate sunt folosite pentru materiale de construcție și reabilitarea locuinței, astfel încât familia să poată petrece iarna într-un mediu sigur.
              </p>
              <a href="Doneaza"><button>Donează pentru acest caz</button></a>
            </div>
            <div className="case-card">
            <div className="image-container">
              <img src={p1} />
            </div>
              <p>Gabriela a suferit multiple fracturi și are nevoie de proteze și terapie de recuperare, costurile ridicându-se la 25.000 de euro. Fondurile colectate vor acoperi intervențiile chirurgicale și tratamentul pentru a putea merge din nou.</p>
              <a href="Doneaza"><button>Donează pentru acest caz</button></a>
            </div>
            <div className="case-card">
              <div className="image-container">
                <img src={p1} />
              </div>
              <p>O tânără care necesită 20.000 de euro pentru o intervenție chirurgicală în străinătate. Campania este activă pentru a colecta suma necesară tratamentului, care poate salva viața fetei.</p>
              <a href="Doneaza"><button>Donează pentru acest caz</button></a>
            </div>
            <div className="case-card">
              <div className="image-container">
                <img src={p1} />
              </div>
              <p>O tânără care necesită 20.000 de euro pentru o intervenție chirurgicală în străinătate. Campania este activă pentru a colecta suma necesară tratamentului, care poate salva viața fetei.</p>
              <a href="Doneaza"><button>Donează pentru acest caz</button></a>
            </div>
          </div>
        </section>
      </div>
      </div>
      <ChatBot />
      <Footer />
    </main>


  );
};




export default Dashboard;
