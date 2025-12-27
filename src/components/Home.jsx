import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Oncology Hospital Management System</h1>
          <p>
            A smart platform to manage cancer patients, treatments,
            appointments, and medical records efficiently.
          </p>

          <div className="hero-buttons">
            <Link to="/patients" className="hero-btn primary">
              View Patients
            </Link>
            <Link to="/appointments" className="hero-btn secondary">
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stat-card">
          <h2>100+</h2>
          <p>Patients Treated</p>
        </div>
        <div className="stat-card">
          <h2>20+</h2>
          <p>Expert Doctors</p>
        </div>
        <div className="stat-card">
          <h2>24/7</h2>
          <p>Care Support</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-box">
            <h3>Patient Management</h3>
            <p>Register, update and monitor patient details with ease.</p>
          </div>
          <div className="feature-box">
            <h3>Treatment Tracking</h3>
            <p>Track chemotherapy, radiation, and treatment timelines.</p>
          </div>
          <div className="feature-box">
            <h3>Appointment Scheduling</h3>
            <p>Schedule and manage appointments efficiently.</p>
          </div>
          <div className="feature-box">
            <h3>Medical Records</h3>
            <p>Secure storage of reports, prescriptions, and lab results.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Oncology Services</h2>
        <ul>
          <li>✔ Chemotherapy</li>
          <li>✔ Radiation Therapy</li>
          <li>✔ Surgical Oncology</li>
          <li>✔ Immunotherapy</li>
          <li>✔ Palliative Care</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Oncology Hospital Management System</p>
      </footer>

    </div>
  );
}

export default Home;
