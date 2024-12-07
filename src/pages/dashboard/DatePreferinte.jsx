import React from "react";
import NavigationDashboard from "../../components/NavigationDashboard";
import Footer from "../../components/Footer";
import "../../styles/Dashboard.css";
import "../../styles/FormularPreferinte.css";
import ChatBot from "../../components/ChatBot";
import UseState, { useState } from "react";


const DatePreferinte = () => {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    numeAfisat: "",
    email: "",
    telefon: "",
    dataNasterii: "",
    acord: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

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
        <section className="dashboard-content" style={{backgroundColor: "#00800030"}}>
        <p style={{textAlign: "center"}}>
        <i>Vrei sa participi in mod regulat la donatie?</i> <br /><br />
        Alege sa <b>redirectionezi:</b> <br />
        Ca <b>persoana fizica, 3,5%</b> din venitul tau, <a href="../Redirectioneaza" style={{fontWeight: "800", color: "green"}}>aici</a><br />
        Ca <b>persoana juridica, 20%</b> din profitul tau, <a href="../Redirectioneaza" style={{fontWeight: "800", color: "green"}}>aici</a><br />
        </p>
        <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "auto",
        marginTop: "10vh",
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.338)",
        padding: "5%",
        borderRadius: "10vh",
        gap: "15px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: "2vh" }}>Nume:</label>
          <input
            type="text"
            name="nume"
            value={formData.nume}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ flex: 1 }}>
        <label style={{ fontSize: "2vh" }}>Prenume:</label>
          <input
            type="text"
            name="prenume"
            value={formData.prenume}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div>
      <label style={{ fontSize: "2vh" }}>Nume de afișat:</label>
        <input
          type="text"
          name="numeAfisat"
          value={formData.numeAfisat}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>
      <div>
      <label style={{ fontSize: "2vh" }}>Adresă de email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <small>
          Vreau să aflu despre nevoile oamenilor și activitatea HandsOnHope – mă
          abonez la newsletter AICI
        </small>
      </div>
      <div>
      <label style={{ fontSize: "2vh", width: "100%"  }}>Telefon:</label>
        <input
          type="tel"
          name="telefon"
          value={formData.telefon}
          onChange={handleChange}
          style={{ width: "60%" }}
        />
      </div>
      <div>
      <label style={{ fontSize: "1.7vh" }}>
          <input
            type="checkbox"
            name="acord"
            checked={formData.acord}
            onChange={handleChange}
            style={{ height: "1.5vh", width: "auto", padding: "none", margin: "none", boxShadow: "none", border: "1px #005F00 solid", borderRadius: "1vh"}}
          />
          Sunt de acord să primesc informații pe telefonul mobil cu privire la
          urgențele care pot apărea în diverse zone
        </label>
      </div>
      <div>
      <label style={{ fontSize: "2vh", width: "100%" }}>Data nașterii:</label>
        <input
          type="date"
          name="dataNasterii"
          value={formData.dataNasterii}
          onChange={handleChange}
          style={{ width: "60%" }}
        />
      </div>
      <button type="submit" className="submit-btn" style={{ alignSelf: "flex-start" }}>
        Salvează modificările
      </button>
    </form>
        </section>
      </div>
      </div>
      <ChatBot />
      <Footer />
    </main>


  );
};




export default DatePreferinte;
