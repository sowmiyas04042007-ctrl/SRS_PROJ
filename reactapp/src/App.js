import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";
import TreatmentTimeline from "./components/TreatmentTimeline";
import Appointment from "./components/Appointment";

import DoctorDashboard from "./components/DoctorDashboard";
import MedicalRecordViewer from "./components/MedicalRecordViewer";
import AddPatient from "./components/AddPatient";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/patients">Patients</Link> |{" "}
        <Link to="/appointments">Appointments</Link> |{" "}
        <Link to="/doctor">Doctor</Link>
      </nav>

      <Switch>
        {/* HOME PAGE FIRST */}
        <Route exact path="/" component={Home} />

        {/* OTHER PAGES */}
        <Route path="/patients" component={PatientList} />
        <Route path="/patient/:id" component={PatientProfile} />
        <Route path="/timeline" component={TreatmentTimeline} />
        {/* <Route path="/appointments" component={AppointmentScheduler} /> */}
        <Route path="/doctor" component={DoctorDashboard} />
        <Route path="/appointments" component={Appointment} />
          <Route path="/add" component={AddPatient} /> 
        <Route path="/records/:id" component={MedicalRecordViewer} />
      </Switch>
    </Router>
  );
}

export default App;
