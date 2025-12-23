import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function PatientDetails() {
  const { id } = useParams();
  const { patients } = useContext(PatientContext);

  const patient = patients.find((p) => p.id === Number(id));

  if (!patient) return null;

  return (
    <div className="container">
      <div className="card">
        <h3>{patient.name}</h3>
        <p>Age: {patient.age}</p>
        <p>Room Status: {patient.roomStatus}</p>

        <Link to={`/room/${patient.id}`}>
          <button>Update Room Status</button>
        </Link>
      </div>
    </div>
  );
}

export default PatientDetails;
