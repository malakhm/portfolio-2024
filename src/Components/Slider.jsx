import Slider from 'react-infinite-logo-slider'
import html from "../Assets/logos/html.png"
import css from "../Assets/logos/css.png"
import js from "../Assets/logos/js.png"
import react from "../Assets/logos/react.png"
import nodejs from "../Assets/logos/nodejs.png"
import linux from "../Assets/logos/linux.png"
import mongo from "../Assets/logos/mongo.png"
import mysql from "../Assets/logos/sql.png"
import nextjs from "../Assets/logos/nextjs.png"
import python from "../Assets/logos/Python.png"
import java from "../Assets/logos/java.png"
import spring from "../Assets/logos/spring.png"
import github from "../Assets/logos/github.png"
import figma from "../Assets/logos/figma.png"
import mongoose from "../Assets/logos/mongoose.png"
import php from "../Assets/logos/php.png"
import sequelize from "../Assets/logos/sequelize.png"
import bootstrap from "../Assets/logos/bootstrap.png"
import vscode from "../Assets/logos/vscode.png"
import wordpress from "../Assets/logos/wordpress.png"


const SimpleSlider = () => (
    <Slider dots  >
      <article style={{overflow:"hidden"}} className="m-3">
        <img style={{objectFit:"cover"}} src={html} width={60} height={60} alt="1" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={css} width={60} height={60} alt="2" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={js} width
        ={50} height={60} alt="3" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={react} width={60} height={60} alt="4" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={nodejs} width={60} height={60} alt="5" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={linux} width={60} height={60} alt="6" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={mongo} width={60} height={60} alt="7" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={mysql} width={60} height={60} alt="8" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={nextjs} width={60} height={60} alt="9" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={python} width={60} height={60} alt="10" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={java} width={60} height={60} alt="11" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={spring} width={60} height={60} alt="12" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={github} width={60} height={60} alt="13" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={figma} width={60} height={60} alt="14" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={mongoose}
        width={60} height={60} alt="15" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={php} width
        ={50} height={60} alt="16" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={sequelize} width={60} height={60} alt="17" />
      </article>

      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={bootstrap} width={60} height={60} alt="18" />
      </article>
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={vscode} width={60} height={60} alt="19" />
      </article>  
      <article style={{overflow:"hidden"}}className="m-3">
        <img style={{objectFit:"cover"}} src={wordpress} width={60} height={60} alt="20" />
      </article>

  
     
    </Slider>
  );       
                     
export default SimpleSlider