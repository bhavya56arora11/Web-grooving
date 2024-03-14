import React from "react";
import './header.css';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Batman_logo.jpg" alt="Logo"/>
                </NavLink>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
