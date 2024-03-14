import React from "react";

const Frontend = () => {
  return (
<div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>

      <div className="skill-box">
        <div className="skills-group">
          <div className="skills-data">
            {/* badge */}

            <div>
              <h3 className="skills-name">Html</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills-data">
            {/* badge */}

            <div>
              <h3 className="skills-name">CSS</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills-data">
            {/* badge */}

            <div>
              <h3 className="skills-name">Javascript</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;