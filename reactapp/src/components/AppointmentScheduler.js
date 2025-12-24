import { useState } from "react";

function AppointmentScheduler() {
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState("");

  const schedule = () => {
    if (!date) {
      setMsg("Select date");
    } else {
      setMsg("Appointment Scheduled Successfully");
    }
  };

  return (
    <div>
      <h2>Appointment Scheduler</h2>
      <input type="date" onChange={e => setDate(e.target.value)} />
      <button onClick={schedule}>Schedule</button>
      <p>{msg}</p>
    </div>
  );
}

export default AppointmentScheduler;
