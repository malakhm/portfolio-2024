import React from "react";
import "./styles/home.css";
import title from "../Assets/title.svg";
import profile from "../Assets/profile.svg";
import design from "../Assets/design.svg";

const Home = () => {
  return (
    <div className="Home-main-component-class" id="home">
      <div className="Title-position-main ">
        <div className="Title-position-main-container">
        <span className="name-class">Hi I'm Malak Hamwi</span>
        <div className="Title-main-container d-flex align-items-stretch">
          <h1>I am a </h1>
          <img className="title-img-svg" src={title} alt="title"/>
        </div>
        </div>
        <img className="design-svg" src={design} alt="design"/>
      </div>

      <div className="Picture-and-element-main-container">
        <img className="profile-main-component" src={profile} alt="profile"/>
      </div>
    </div>
  );
};

export default Home;
