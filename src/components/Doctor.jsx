import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Doctor() {
  const { doctors } = useContext(DataContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Doctors</h2>

      {doctors.map(d => (
        <div
          key={d.id}
          style={{
            background: "#f5f9ff",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          <p><strong>Name:</strong> {d.name}</p>
          <p><strong>Specialization:</strong> {d.specialization}</p>
          <p><strong>Availability:</strong> {d.availability}</p>
        </div>
      ))}
    </div>
  );
}

export default Doctor;
