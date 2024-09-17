import React from "react";
import "./styles/projects.css";
import SectionTitle from "../Components/SectionTitle";
import SingleProject from "../Components/SignleProject";
import fashionZone from "../Assets/fashionZone.png";
import chased from "../Assets/chased.png";
import ai from "../Assets/ai.png";
import innove from "../Assets/innove.png";
import built from "../Assets/built.png";
import noty from "../Assets/noty.png";
import bandali from "../Assets/bandali.png";
import abadai from "../Assets/abadai.png";

const Projects = () => {
  return (
    <div className="Projects-main-component-class " id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="Project-container">
        <SingleProject
          nameProject="Fashion Zone"
          category="E-commerce"
          img={fashionZone}
          link="https://www.fashionzoneleb.com/"
          desc="This website allows users to navigate through products also has ordering
feature. In addition , an admin dashboard is implemented with all
management features"
          stack="MERN Stack"
        />
        <SingleProject
          nameProject="Chased"
          category="Networking"
          img={chased}
          link="https://chasedd.vercel.app/"
          desc="This website is a great platform to find developers and hire them according to their projects not only their resume."
          stack="MERN Stack"
        />{" "}
        <SingleProject
          nameProject="Built View"
          category="Informative"
          img={built}
          link="https://built-view-new.vercel.app/"
          desc="Informative website that explains in detail the services of Built View company. This is a Customized Template"
          stack="NextJs"
        />
        <SingleProject
          nameProject="Innov8-AI"
          category="Informative"
          img={innove}
          link="https://innove8-ai.vercel.app/"
          desc="Informative website that explains in detail the services of Innov8-AI company"
          stack="Html, Css and Js"
        />
        <SingleProject
          nameProject="AI-Compare"
          category="AI"
          img={ai}
          link="#"
          desc="This website is a simulation of any AI playground with comparing feature , you can compare the answer , speed and cost of 4 AI models at the same time . In addition , this website has 60+ models that you can use , also you can integrate fake chat histroy and add instructions so you can program the AI to answer the way you want. This Website has an admin side , where the admin can add as many models as he/she wants, also can edit , enable and disable models"
          stack="MERN Stack"
        />
         <SingleProject
          nameProject="Noty"
          category="Personal"
          img={noty}
          link="https://noty-topaz.vercel.app/"
          desc="A Note management tool that allows you to add, edit, delete notes."
          stack="MERN Stack"
        />
        <SingleProject
          nameProject="Michel Bandali Design"
          category="E-commerce"
          img={bandali}
          link="https://www.michelbandalidesign.com"
          desc="E-commerce website for Michel Bandali Design, a company that sells recycled lightboxes and clothes and that collaborates with NGOs.This website has an admin dashboard with full control over the orders and products"
          stack="MERN Stack"
        />
         <SingleProject
          nameProject="Abadai Beirut Restaurant"
          category="E-commerce"
          img={abadai}
          link="https://abadai-beirut.vercel.app/"
          desc="E-commerce website for a reastaurant based in Abu Dhabi.Website features: listing products ,  an admin dashboard with full control over the products"
          stack="MERN Stack"
        />
      </div>
    </div>
  );
};

export default Projects;
