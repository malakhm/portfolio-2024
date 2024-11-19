import React, { useState } from "react";
import "./styles/header.css";
import logo from "../Assets/logo.png";
import Buttonn from "./Button";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("home");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSetActive = (section) => {
    setActive(section);
  };
  const handleSetActiveMobile = (section) => {
    setActive(section);
    handleClose();
  };

  return (
    <div
      className="Header-main-component-class d-flex justify-content-between"
      //   style={{ border: "1px solid white" }}
    >
      <img src={logo} width={50} height={50} alt="logo" />

      <div className="Menu-main-component-class ">
        <ul className="Menu-list-items d-flex justify-content-between gap-4">
          <a href="#home" onClick={() => handleSetActive("home")}>
            <li className={active === "home" ? "active" : ""}>Home</li>
          </a>
          <a href="#about" onClick={() => handleSetActive("about")}>
            <li className={active === "about" ? "active" : ""}>About</li>
          </a>
          <a href="#services" onClick={() => handleSetActive("services")}>
            <li className={active === "services" ? "active" : ""}>Services</li>
          </a>
          <a href="#projects" onClick={() => handleSetActive("projects")}>
            <li className={active === "projects" ? "active" : ""}>Projects</li>
          </a>
          <a href="#contact" onClick={() => handleSetActive("contact")}>
            <li className={active === "contact" ? "active" : ""}>Contact</li>
          </a>
        </ul>
      </div>

      <a
        href="https://www.linkedin.com/in/malak-hamawi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Buttonn className="Button-hire-me">Hire me</Buttonn>
      </a>

      <div className="Menu-burger-main-component-class">
        <CiMenuBurger
          id="fade-button"
          className="Menu-burger-icon"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />

        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <a href="#home">
            <MenuItem
              className={active === "home" ? "active" : ""}
              onClick={handleSetActiveMobile}
            >
              Home
            </MenuItem>
          </a>
          <a href="#about">
            <MenuItem
              className={active === "about" ? "active" : ""}
              onClick={handleSetActiveMobile}
            >
              About
            </MenuItem>
          </a>
          <a href="#services">
            <MenuItem
              className={active === "services" ? "active" : ""}
              onClick={handleSetActiveMobile}
            >
              Services
            </MenuItem>
          </a>
          <a href="#projects">
            <MenuItem
              className={active === "projects" ? "active" : ""}
              onClick={handleSetActiveMobile}
            >
              Projects
            </MenuItem>
          </a>
          <a href="#contact">
            <MenuItem
              className={active === "contact" ? "active" : ""}
              onClick={handleSetActiveMobile}
            >
              Contact
            </MenuItem>
          </a>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
