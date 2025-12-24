import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useParams, useHistory } from "react-router-dom";

function RoomStatus() {
  const { id } = useParams();
  const history = useHistory();
  const { patients, updateRoomStatus } = useContext(PatientContext);

  const patient = patients.find((p) => p.id === Number(id));


  const [status, setStatus] = useState(
    patient ? patient.roomStatus : "Available"
  );

  if (!patient) {
    return <div>Patient not found</div>;
  }

  const handleUpdate = () => {
    updateRoomStatus(patient.id, status);
  };

  return (
    <div>

      <h3>{patient.name}</h3>

      <p>Room Status: {patient.roomStatus}</p>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Available">Available</option>
        <option value="Occupied">Occupied</option>
      </select>

      <button onClick={handleUpdate}>Update Status</button>

      <button onClick={() => history.push(`/patient/${patient.id}`)}>
        Back to Patient
      </button>
    </div>
  );
}

export default RoomStatus;
