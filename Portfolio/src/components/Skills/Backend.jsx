import React from 'react'

const Backend = () => {
  return (    <div className="skills-content">
  <h3 className="skills-title">Backend Developer</h3>

  <div className="skill-box">
    <div className="skills-group">
      <div className="skills-data">
        {/* badge */}

        <div>
          <h3 className="skills-name">Node js</h3>
          <span className="skills-level">Basic</span>
        </div>
      </div>
      <div className="skills-data">
        {/* badge */}

        <div>
          <h3 className="skills-name">Mongo</h3>
          <span className="skills-level">Basic</span>
        </div>
      </div>
      <div className="skills-data">
        {/* badge */}

        <div>
          <h3 className="skills-name">SQL</h3>
          <span className="skills-level">Basic</span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Backend