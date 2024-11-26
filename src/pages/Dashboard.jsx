import React from "react";
import NavigationDashboard from "../components/NavigationDashboard";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";


const Dashboard = () => {
  return (
    <main>
      <NavigationDashboard />

      <div className="main-content">
        <h1 className="text-test">Salutare, xyz!</h1>
      </div>

      <Footer />
    </main>

  );
};

export default Dashboard;
