import React from "react";
import "./styles/services.css";
import SectionTitle from "../Components/SectionTitle";
import UI from "../Assets/UIandUX.mp4";
import fullStack from "../Assets/fullStack.mp4";
import wordpress from "../Assets/wordpress.mp4";

const Services = () => {
  return (
    <div
      style={{ minHeight: "100svh" }}
      className="Services-main-component-class mt-5 d-flex  align-items-center"
      id="Services"
    >
      <SectionTitle>Services</SectionTitle>
      <div className="Services-content-class d-flex">
        <div className="Services-content-item-class">
          <h2>UI/UX Design</h2>
          <video
            width="320"
            height="240"
            autoPlay
            loop
            muted
            src={UI}
          ></video>
        </div>

        <div className="Services-content-item-class">
          <h2>Full Stack Developer</h2>
          <video
            width="320"
            height="240"
            autoPlay
            loop
            muted
            src={fullStack}
          ></video>
        </div>

        <div className="Services-content-item-class">
          <h2>Wordpress Developer</h2>
          <video
            width="320"
            height="240"
            autoPlay
            loop
            muted
            src={wordpress}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Services;