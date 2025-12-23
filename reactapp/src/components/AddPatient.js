import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useHistory } from "react-router-dom";

function AddPatient() {
  const { addPatient } = useContext(PatientContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = () => {
    addPatient({
      id: Date.now(),
      name,
      age,
      roomStatus: "Available",
    });
    history.push("/");
  };

  return (
    <div>
      <input
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default AddPatient;
