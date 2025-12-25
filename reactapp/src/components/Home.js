import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Oncology Hospital Management System</h1>
        <p>
          Advanced digital platform for cancer patient care, treatment tracking,
          and coordinated oncology services.
        </p>

        <div className="hero-buttons">
          <Link to="/" className="btn primary">View Patients</Link>
          <Link to="/appointments" className="btn secondary">Schedule Appointment</Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Core Features</h2>
        <div className="card-container">
          <div className="card">Patient Management</div>
          <div className="card">Treatment Tracking</div>
          <div className="card">Appointment Scheduling</div>
          <div className="card">Medical Records</div>
          <div className="card">Doctor Dashboard</div>
          <div className="card">Follow-Up Care</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Oncology Services</h2>
        <ul>
          <li>Chemotherapy</li>
          <li>Radiation Therapy</li>
          <li>Surgical Oncology</li>
          <li>Immunotherapy</li>
          <li>Post-Treatment Follow-Up</li>
        </ul>
      </section>

      {/* QUICK DASHBOARD */}
      <section className="dashboard">
        <h2>Quick Access</h2>
        <div className="dashboard-buttons">
          <Link to="/doctor" className="btn">Doctor Dashboard</Link>
          <Link to="/records" className="btn">Medical Records</Link>
          <Link to="/timeline" className="btn">Treatment Timeline</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Oncology Hospital Management System</p>
        <p>Secure • Reliable • Responsive</p>
      </footer>

    </div>
  );
}

export default Home;
