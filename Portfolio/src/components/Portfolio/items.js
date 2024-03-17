import React from "react";
import { FaArrow } from "react-icons/fa";
import shapeTwo from "./shape-2.png";
import image from './project.png';

const items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((project) => {
        const { id, img, title, description } = project;
        return (
          <div className="portfolio-items card card-two">
            <div className="portfolio-img-wrapper">
              <img src={image} className="portfolio-img"></img>
            </div>

            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default items;
