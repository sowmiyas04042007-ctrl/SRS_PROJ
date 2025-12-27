import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { DataContext } from "../context/DataContext";

function DoctorDashboard() {
  const { patients, treatments } = useContext(PatientContext);
  const { doctors, appointments } = useContext(DataContext);

  return (
    <div style={container}>
      <h2 style={title}>🏥 Doctor Dashboard</h2>

      {/* SUMMARY CARDS */}
      <div style={cardContainer}>
        <div style={card}>
          <h3>Total Patients</h3>
          <p style={count}>{patients.length}</p>
        </div>

        <div style={card}>
          <h3>Total Doctors</h3>
          <p style={count}>{doctors.length}</p>
        </div>

        <div style={card}>
          <h3>Total Appointments</h3>
          <p style={count}>{appointments.length}</p>
        </div>

        <div style={card}>
          <h3>Total Treatments</h3>
          <p style={count}>{treatments.length}</p>
        </div>
      </div>

      {/* RECENT APPOINTMENTS */}
      <div style={section}>
        <h3>📅 Recent Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments scheduled</p>
        ) : (
          <ul>
            {appointments.map((a, i) => (
              <li key={i}>
                Patient ID: {a.patientId}, Doctor ID: {a.doctorId}, Date: {a.date}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* PATIENT LIST */}
      <div style={section}>
        <h3>👥 Registered Patients</h3>
        {patients.length === 0 ? (
          <p>No patients registered</p>
        ) : (
          <ul>
            {patients.map(p => (
              <li key={p.id}>
                {p.name} – {p.diagnosis}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DoctorDashboard;

/* ---------------- STYLES ---------------- */

const container = {
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const title = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#1976d2",
};

const cardContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const card = {
  background: "#f5f9ff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const count = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1565c0",
};

const section = {
  marginTop: "30px",
};
