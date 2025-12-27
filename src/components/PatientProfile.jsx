import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function PatientProfile() {
  const { id } = useParams();
  const { patients } = useContext(PatientContext);

  const patient = patients.find(p => p.id === Number(id));
  if (!patient) return <p>Patient not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{patient.name}</h2>
      <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>

      <Link to={`/records/${patient.id}`}>Medical Records</Link>
      <br />
      <Link to="/timeline">Treatment Timeline</Link>
    </div>
  );
}

export default PatientProfile;
