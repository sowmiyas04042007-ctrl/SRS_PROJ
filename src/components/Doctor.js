import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Doctor() {
  const { doctors } = useContext(DataContext);

  return (
    <div>
      <h2>Doctors</h2>
      {doctors.map(d => (
        <div key={d.id}>
          <p>Name: {d.name}</p>
          <p>Specialization: {d.specialization}</p>
          <p>Availability: {d.availability}</p>
        </div>
      ))}
    </div>
  );
}

export default Doctor;
