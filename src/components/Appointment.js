import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { PatientContext } from "../context/PatientContext";

function Appointment() {
  const { appointments, setAppointments, doctors } = useContext(DataContext);
  const { patients } = useContext(PatientContext);

  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const scheduleAppointment = () => {
    if (!patientId || !doctorId || !date || !type) return;

    setAppointments([
      ...appointments,
      { patientId, doctorId, date, type }
    ]);

    setPatientId("");
    setDoctorId("");
    setDate("");
    setType("");
  };

  return (
    <div>
      <h2>Schedule Appointment</h2>

      {/* Patient */}
      <select value={patientId} onChange={e => setPatientId(e.target.value)}>
        <option value="">Select Patient</option>
        {patients.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>

      {/* Doctor */}
      <select value={doctorId} onChange={e => setDoctorId(e.target.value)}>
        <option value="">Select Doctor</option>
        {doctors.map(d => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>

      {/* Date */}
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />

      {/* Type */}
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="Consultation">Consultation</option>
        <option value="Treatment">Treatment</option>
        <option value="Follow-up">Follow-up</option>
      </select>

      <button onClick={scheduleAppointment}>Schedule</button>

      <h3>Appointments</h3>
      <ul>
        {appointments.map((a, i) => (
          <li key={i}>
            Patient ID: {a.patientId}, Doctor ID: {a.doctorId},
            Date: {a.date}, Type: {a.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointment;
