import React, { useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "../App.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-logo">
          Mr.Arora
        </NavLink>
        <div className={`nav-menu ${showMenu ? "show" : ""}`}>
          <div className="nav-data">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="qualifications"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Qualifications
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="work"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="footer"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={50}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-btns">
          <div
            className={`nav-toggle ${showMenu ? "animate-toggle" : ""}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
