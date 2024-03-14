import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Skill() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My technical level</span>

      <div className="skills-container container grid">
<Frontend />
<Backend />
      </div>
    </section>
  );
}
