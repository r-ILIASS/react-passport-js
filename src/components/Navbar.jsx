import React from "react";
import { Link } from "react-router-dom";
// Assets
import Logo from "../assets/passport.svg";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        {user ? (
          <ul className="list">
            <li className="listItem">
              <img
                src="https://source.unsplash.com/random"
                alt="avatar"
                className="avatar"
              />
            </li>
            <li className="listItem">John smith</li>
            <li className="listItem">Logout</li>
          </ul>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
