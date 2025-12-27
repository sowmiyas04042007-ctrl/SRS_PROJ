import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { DataContext } from "../context/DataContext";

function Report() {
  const { patients } = useContext(PatientContext);
  const { doctors, appointments } = useContext(DataContext);

  const totalTreatments = patients.reduce(
    (sum, p) => sum + p.treatmentHistory.length,
    0
  );

  const totalPrescriptions = patients.reduce(
    (sum, p) => sum + p.prescriptions.length,
    0
  );

  return (
    <div style={container}>
      <h2 style={title}>📊 Hospital Reports</h2>

      <div style={grid}>
        <div style={card}>
          <h3>Total Patients</h3>
          <p>{patients.length}</p>
        </div>

        <div style={card}>
          <h3>Total Doctors</h3>
          <p>{doctors.length}</p>
        </div>

        <div style={card}>
          <h3>Total Appointments</h3>
          <p>{appointments.length}</p>
        </div>

        <div style={card}>
          <h3>Total Treatments</h3>
          <p>{totalTreatments}</p>
        </div>

        <div style={card}>
          <h3>Total Prescriptions</h3>
          <p>{totalPrescriptions}</p>
        </div>
      </div>
    </div>
  );
}

export default Report;

/* ---------- STYLES ---------- */

const container = {
  padding: "30px",
};

const title = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#1976d2",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#f5f9ff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  fontSize: "18px",
};
