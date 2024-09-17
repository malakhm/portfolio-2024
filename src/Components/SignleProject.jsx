import React from "react";
import {
  FaBookOpen,
  FaCartShopping,
  FaCreditCard,
  FaNetworkWired,
  FaUser
} from "react-icons/fa6";
import "./styles/project.css";
import { Link } from "react-router-dom";
import { LuBrainCircuit } from "react-icons/lu";
const SingleProject = ({ nameProject, link, desc, img, category, stack }) => {
  return (
    <div className="single-project-main-component-class">
      <Link to={link}>
        <img
          src={img}
          alt="project"
          width={300}
          height={170}
          style={{ borderRadius: "10px 10px 0px 0px" }}
        />
      </Link>
      <div className="info-class">
        <div className="category-class d-flex justify-content-between align-items-center">
          <span>{category}</span>
          {category === "E-commerce" ? (
            <FaCartShopping className="project-icon" />
          ) : category === "Networking" ? (
            <FaNetworkWired className="project-icon" />
          ) : category === "Fintech" ? (
            <FaCreditCard className="project-icon" />
          ) : category === "Informative" ? (
            <FaBookOpen className="project-icon" />
          ) : category === "AI" ? (
            <LuBrainCircuit className="project-icon" />
          ): category === "Personal" ? (
            <FaUser className="project-icon" />
          ) : null}
        </div>
        <div className="d-flex flex-column align-items-start justify-content-between  " >
          <div className="d-flex flex-column ">
            <span className="name-project-main">{nameProject}</span>
            <p style={{ fontSize: "14px" }}>{desc}</p>
          </div>
          <span>
            Tech Stack: <span className="Stack-project-main">{stack}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
