import { Link } from "react-router-dom";

function Navbar() {
 return (
  <div>
   <Link to="/">Patient List</Link> |{" "}
   <Link to="/add">Add Patient</Link>
  </div>
 );
}

export default Navbar;

