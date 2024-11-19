import React from "react";
import SectionTitle from "../Components/SectionTitle";
import "./styles/about.css";
import about from '../Assets/about.svg'

const About = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="About-main-component-class " id="about">
      <div className="content">
        <SectionTitle>About</SectionTitle>

        <div className="Main-content-container">
          <div className="About-text-container">
            <h1 className="About-Title-text d-flex gap-2">
              I <h1 className="highlighted-text"> Design</h1> and I
            </h1>
            <h1 className=" d-flex gap-2">
              <h1 className="highlighted-text">{"{ Develop }"}</h1> Software
            </h1>
            <span className="paragraph-text-span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>

          <div className="About-img-container">
            <img className="img-about" src={about} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
