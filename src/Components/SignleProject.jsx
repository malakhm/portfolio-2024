import React from "react";
import { FaBookOpen, FaCartShopping, FaCreditCard, FaNetworkWired } from "react-icons/fa6";
import "./styles/project.css";
import { Link } from "react-router-dom";

const SingleProject = ({ nameProject, link, desc, img, category }) => {
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
          ) : null}
        </div>
        <h5>{nameProject}</h5>
        <p style={{ fontSize: "14px" }}>{desc}</p>
      </div>
    </div>
  );
};

export default SingleProject;
