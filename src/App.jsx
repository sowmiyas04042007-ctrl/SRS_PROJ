import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";
import PatientProfile from "./components/PatientProfile";
import Appointment from "./components/Appointment";
import DoctorDashboard from "./components/DoctorDashboard";
import MedicalRecordViewer from "./components/MedicalRecordViewer";
import TreatmentTimeline from "./components/TreatmentTimeline";


function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#1976d2" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/patients" style={linkStyle}>Patients</Link>
        <Link to="/appointments" style={linkStyle}>Appointments</Link>
        <Link to="/doctor" style={linkStyle}>Doctors</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/add" element={<AddPatient />} />
        <Route path="/patient/:id" element={<PatientProfile />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/records/:id" element={<MedicalRecordViewer />} />
        <Route path="/timeline" element={<TreatmentTimeline />} />
      </Routes>
    </BrowserRouter>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none",
  fontWeight: "bold"
};

export default App;
