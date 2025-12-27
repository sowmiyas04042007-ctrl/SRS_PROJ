import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Report() {
  const { patients, appointments } = useContext(DataContext);

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Patients: {patients.length}</p>
      <p>Total Appointments: {appointments.length}</p>
      <p>Ongoing Treatments: {patients.length}</p>
    </div>
  );
}

export default Report;
