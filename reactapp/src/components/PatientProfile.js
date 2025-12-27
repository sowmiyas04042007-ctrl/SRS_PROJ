import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import "./PatientProfile.css";

function PatientProfile() {
  const { id } = useParams();
  const { patients } = useContext(PatientContext);

  const patient = patients.find(p => p.id === Number(id));
  if (!patient) return <p>Patient not found</p>;

  return (
    <div className="profile-container">
      <h2>{patient.name}</h2>

      <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>

      {/* ✅ TREATMENT PLAN MANAGEMENT */}
      <h3>Treatment Plan</h3>
      <ul>
        {patient.treatmentHistory && patient.treatmentHistory.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>

      {/* LINKS WITH PROPER GAP */}
      <div className="profile-links">
        <Link to="/timeline" className="profile-btn">
          Treatment Timeline
        </Link>

        <Link to="/records" className="profile-btn">
          Medical Records
        </Link>
      </div>
    </div>
  );
}

export default PatientProfile;
