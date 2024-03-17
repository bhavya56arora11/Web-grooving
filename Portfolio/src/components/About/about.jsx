import React from "react";
import Info from "./info";
import "./about.css";
import { NavLink } from "react-router-dom";
import cv from "./atom.png";
import '../App.css';

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>

      <div className="about-container container grid">
        <img className="about-img" src={cv}></img>
        <div className="about-data">
          <Info />

          <NavLink download="" href={cv} className="button button--flex">
          <button class="ui-btn">
            <span>Download CV</span>
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default About;
