import React, { useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu);
  }, [showMenu]);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-logo">
          Mr.Arora
        </NavLink>
        <div className={`nav-menu ${showMenu ? 'show' : ''}`}>
          <div className="nav-data">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="skills" className="nav-link">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="portfolio" className="nav-link">
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-btns">
          <div
            className={`nav-toggle ${showMenu ? 'animate-toggle' : ''}`}
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