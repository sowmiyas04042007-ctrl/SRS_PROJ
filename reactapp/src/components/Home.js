import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HEADER */}
      <header className="header">
        <h1>Oncology Hospital Management System</h1>
        <p>
          Manage cancer patients, treatments, appointments, and medical records
          in a simple and efficient way.
        </p>
      </header>

      {/* ACTION BUTTONS */}
      <section className="actions">
        <Link to="/patients" className="btn">Patient List</Link>
        <Link to="/appointments" className="btn">Appointments</Link>
        <Link to="/doctor" className="btn">Doctor Dashboard</Link>
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2>Key Features</h2>
        <div className="box">
          <ul>
            <li>Patient Registration and Management</li>
            <li>Treatment Plan Tracking</li>
            <li>Appointment Scheduling</li>
            <li>Medical Records Management</li>
            <li>Follow-Up Care</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>Oncology Services</h2>
        <div className="box">
          <ul>
            <li>Chemotherapy</li>
            <li>Radiation Therapy</li>
            <li>Surgical Oncology</li>
            <li>Immunotherapy</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Oncology Hospital Management System</p>
      </footer>

    </div>
  );
}

export default Home;
