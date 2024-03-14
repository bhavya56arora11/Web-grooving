import React from "react";
import "./intro.css";
import { Link } from "react-scroll";

function intro() {
  return (
    <section id="intro">
    {/* <nav className="nav-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Batman_logo.jpg" alt="" className='nav-logo'/>
        <ul className='nav-list'>
        <Link className="nav-link">Home</Link>
        <Link className="nav-link">About</Link>
        <Link className="nav-link">Projects</Link>
        </ul>
        <button className='nav-button'>
            <img src="https://i.pinimg.com/736x/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.jpg" alt="" className="nav-button-img" />Contact Me
        </button>
    </nav> */}
      <div className="introcontent">
        <span className="Hi">Hi</span>
        <span className="introText">
          I am<span className="introName"> Bhavya Arora</span>
          <br></br>A Web Developer
        </span>
        <Link>
          <button class="ui-btn">
            <span>My Resume</span>
          </button>
        </Link>
      </div>
      <video autoPlay muted loop className="introVid">
        <source
          src="https://assets-global.website-files.com/5e18a1cc86ccdc5d5a0d353d/6436c09081e7055dd8e3e27c_Hero-2023-lg-transcode.mp4"
          data-wf-ignore="true"
        ></source>
      </video>
    </section>
  );
}

export default intro;
