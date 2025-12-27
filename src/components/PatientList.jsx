import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { Link } from "react-router-dom";

function PatientList() {
  const { patients } = useContext(PatientContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Patients</h2>
      <Link to="/add">➕ Add Patient</Link>

      {patients.map(p => (
        <div key={p.id} style={card}>
          <h4>{p.name}</h4>
          <p>{p.diagnosis}</p>
          <Link to={`/patient/${p.id}`}>View Profile</Link>
        </div>
      ))}
    </div>
  );
}

const card = {
  background: "#f5f5f5",
  padding: "10px",
  marginTop: "10px"
};

export default PatientList;
