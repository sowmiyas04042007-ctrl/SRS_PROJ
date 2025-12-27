import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useNavigate } from "react-router-dom";

function AddPatient() {
  const { addPatient } = useContext(PatientContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    addPatient({
      id: Date.now(),
      name,
      diagnosis
    });

    navigate("/patients");
  };

  return (
    <form onSubmit={submitHandler} style={formStyle}>
      <h2>Add Patient</h2>

      <input
        placeholder="Patient Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <input
        placeholder="Diagnosis"
        value={diagnosis}
        onChange={e => setDiagnosis(e.target.value)}
        required
      />

      <button>Add Patient</button>
    </form>
  );
}

const formStyle = {
  width: "300px",
  margin: "30px auto",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

export default AddPatient;
