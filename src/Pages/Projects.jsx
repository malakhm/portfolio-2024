import React from 'react'
import "./styles/projects.css"
import SectionTitle from '../Components/SectionTitle'
import SingleProject from '../Components/SignleProject'
import fashionZone from "../Assets/image.png";
const Projects = () => {
  return (
    <div className='Projects-main-component-class ' id='projects'>
        <SectionTitle>
            Projects
        </SectionTitle>
        <div className='Project-container'>
          <SingleProject nameProject="Fashion Zone" category="E-commerce" img={fashionZone} link="https://www.fashionzoneleb.com/" desc="This website allows users to navigate through products also has ordering
feature. In addition , an admin dashboard is implemented with all
management features" />
      <SingleProject nameProject="Chased" category="Networking" img={fashionZone} link="https://chasedd.vercel.app/" desc="This website allows users to navigate through products also has ordering
feature. In addition , an admin dashboard is implemented with all
management features" />
          </div> 

    </div>
  )
}

export default Projects
