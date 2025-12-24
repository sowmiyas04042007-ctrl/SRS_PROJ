import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { Link } from "react-router-dom";

function PatientList() {
  const { patients } = useContext(PatientContext);

  return (
    <>
    
      <div className="hero">
        <div className="hero-content">
          <h1>Hospital Management System</h1>
          <p>
            Manage patient records, room availability, and hospital operations
            efficiently using our modern system.
          </p>
          <Link to="/add">
      
          </Link>
        </div>
      </div>

     
      <div className="container">
        <h2>Patients List</h2>

        {patients.length === 0 && <p>No patients added yet.</p>}

        {patients.map((p) => (
          <div key={p.id}>
            <Link to={`/patient/${p.id}`}>{p.name}</Link>
          </div>
        ))}
      </div>
   
 </>
  );
}
export default PatientList;