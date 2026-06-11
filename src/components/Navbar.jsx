import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        TalentHub
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/remote-jobs">
          Remote Jobs
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

        <Link to="/admin">
          Admin
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;