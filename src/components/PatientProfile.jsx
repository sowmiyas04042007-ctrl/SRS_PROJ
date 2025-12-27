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

      <p>
        <strong>Diagnosis:</strong> {patient.diagnosis}
      </p>

      {/* TREATMENT PLAN */}
      <h3>Treatment Plan</h3>
      {patient.treatmentHistory.length > 0 ? (
        <ul>
          {patient.treatmentHistory.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      ) : (
        <p>No treatment added</p>
      )}

      {/* ACTION BUTTONS */}
      <div className="profile-links">
        <Link to={`/records/${patient.id}`} className="profile-btn">
          Medical Records
        </Link>

        <Link to={`/timeline/${patient.id}`} className="profile-btn">
          Treatment Timeline
        </Link>

        <Link to={`/prescription/${patient.id}`} className="profile-btn">
          Prescriptions
        </Link>
      </div>
    </div>
  );
}

export default PatientProfile;
