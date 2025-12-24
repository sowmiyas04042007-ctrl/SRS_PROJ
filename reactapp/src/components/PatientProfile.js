import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function PatientProfile() {
  const { id } = useParams();
  const { patients } = useContext(PatientContext);

  const patient = patients.find(p => p.id === Number(id));
  if (!patient) return <p>Loading...</p>;

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>Diagnosis: {patient.diagnosis}</p>
      <Link to="/timeline">Treatment Timeline</Link>
      <Link to="/records">Medical Records</Link>
    </div>
  );
}

export default PatientProfile;
