import React from "react";
import NavigationDashboard from "../../components/NavigationDashboard";
import Footer from "../../components/Footer";
import "../../styles/Dashboard.css";
import p1 from "../../images/case.jpg";


const DatePreferinte = () => {
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
            <li><a href="IntrebariSugestii">Am o întrebare/sugestie</a></li>
            <li><a href="DatePreferinte"><span className="current-page">Datele și preferințele mele</span></a></li>
            <li onClick={() =>window.alert('Acum ar trebui sa se delogheze.')} className="logout">Dezautentificare</li>
          </ul>
        </nav>
        </aside>

        {/* Conținutul principal */}
        <section className="dashboard-content">
        Date Preferinte
        </section>
      </div>
      </div>
      <Footer />
    </main>


  );
};




export default DatePreferinte;
