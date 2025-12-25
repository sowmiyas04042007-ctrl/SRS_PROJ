import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";
import TreatmentTimeline from "./components/TreatmentTimeline";
import AppointmentScheduler from "./components/AppointmentScheduler";
import DoctorDashboard from "./components/DoctorDashboard";
import MedicalRecordViewer from "./components/MedicalRecordViewer";
import "./components/Home.css";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/">Patients</Link> |{" "}
        <Link to="/appointments">Appointments</Link> |{" "}
        <Link to="/doctor">Doctor</Link>
      </nav>

      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={PatientList} />
        <Route path="/patient/:id" component={PatientProfile} />
        <Route path="/timeline" component={TreatmentTimeline} />
        <Route path="/appointments" component={AppointmentScheduler} />
        <Route path="/doctor" component={DoctorDashboard} />
        <Route path="/records" component={MedicalRecordViewer} />
      </Switch>
    </Router>
  );
}

export default App;
