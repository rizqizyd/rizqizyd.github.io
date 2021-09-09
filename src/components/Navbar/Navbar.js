import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav">
        <ul>
          <Link as={NavLink} to="/">
            <li>
              <a href="">Home</a>
            </li>
          </Link>
          <Link as={NavLink} to="/project">
            <li>
              <a href="">Project</a>
            </li>
          </Link>
          <Link as={NavLink} to="/game">
            <li>
              <a href="">Game</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
