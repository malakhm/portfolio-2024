import React from "react";
import imgOne from "../Assets/1.svg";
import imgTwo from "../Assets/2.svg";
import imgThree from "../Assets/3.svg";
import "./styles/steps.css";
import SectionTitle from "../Components/SectionTitle";

const Steps = () => {
  return (
    <div className=""><SectionTitle>Work Process</SectionTitle>
    <div className="Main-Steps-class">
        
      <div className="step-class d-flex flex-column gap-3">
        <img src={imgOne} alt="step-one"width={150} height={150}/>
        <p className="text-desc-steps">Requirements gathering and research</p>
      </div>
      <div className="step-class d-flex flex-column gap-3">
        <img src={imgTwo} alt="step-two" width={150} height={150}/>
        <p className="text-desc-steps">
          Developement followed By follow up and meetings with Clients(Agile
          Methodology)
        </p>
      </div>
      <div className="step-class d-flex flex-column gap-3">
        <img src={imgThree} alt="step-three" width={150} height={150}/>
        <p className="text-desc-steps">Deployement , get ready to bring ,more customers</p>
      </div>
    </div>
    </div>
  );
};

export default Steps;
