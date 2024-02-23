import "../pages/Home.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-center">
      <div className="row">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              By Cityname
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/bylat&lon"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              By Lat&Lon
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
