import { Link } from "react-router-dom";
import "./Navbar.css";  

function Navbar() {
  return (
    <div className="navbar">
    <Link to="/" className="nav-box">
      Patient List
    </Link>

    <Link to="/add" className="nav-box primary">
      Add Patient
    </Link>
  </div>

  );
}

export default Navbar;
