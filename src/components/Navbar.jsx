import React from "react";
// Assets
import Logo from "../assets/passport.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <img src={Logo} alt="logo" className="logo" />
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
      </div>
    </div>
  );
};

export default Navbar;
