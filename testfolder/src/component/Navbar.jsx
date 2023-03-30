import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const data = localStorage.getItem("token");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");

    navigate("/signup");
  };
  return (
    <>
      <div className="nav-div">
        {data ? (
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link onClick={logout} to="/signup">
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
           
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
