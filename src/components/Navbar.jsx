import { NavLink } from "react-router-dom";
import StyledNavbar from "./styles/Navbar.styled";

const Navbar = ({ active }) => {
  return (
    <StyledNavbar>
      {/* Left */}
      <ul className="nav-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Nearest rides</li>
        </NavLink>

        <NavLink
          to="/upcoming-rides"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Upcoming rides (4)</li>
        </NavLink>

        <NavLink
          to="/past-rides"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Past rides (2)</li>
        </NavLink>
      </ul>

      {/* Right */}
      <div className="filter-menu">
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-6.10352e-05 12.0001H5.99994V10.0001H-6.10352e-05V12.0001ZM-6.10352e-05 9.15527e-05V2.00009H17.9999V9.15527e-05H-6.10352e-05ZM-6.10352e-05 7.00009H11.9999V5.00009H-6.10352e-05V7.00009Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>

        <span>Filters</span>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
