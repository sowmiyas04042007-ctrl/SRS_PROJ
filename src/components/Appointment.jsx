import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { PatientContext } from "../context/PatientContext";

function Appointment() {
  const { appointments, setAppointments, doctors } = useContext(DataContext);
  const { patients } = useContext(PatientContext);

  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");

  const schedule = () => {
    if (!patientId || !doctorId || !date) return;

    setAppointments([...appointments, { patientId, doctorId, date }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Schedule Appointment</h2>

      <select onChange={e => setPatientId(e.target.value)}>
        <option value="">Select Patient</option>
        {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
      </select>

      <select onChange={e => setDoctorId(e.target.value)}>
        <option value="">Select Doctor</option>
        {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
      </select>

      <input type="date" onChange={e => setDate(e.target.value)} />
      <button onClick={schedule}>Schedule</button>
    </div>
  );
}

export default Appointment;
