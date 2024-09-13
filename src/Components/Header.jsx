import React from "react";
import "./styles/header.css";
import logo from "../Assets/logo.png";
import Buttonn from "./Button";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className="Header-main-component-class d-flex justify-content-between"
    //   style={{ border: "1px solid white" }}
    >
      <img src={logo} width={50} height={50} alt="logo" />

      <div className="Menu-main-component-class ">
        <ul className="Menu-list-items d-flex justify-content-between gap-4">
          <li className="active">Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      
      <Buttonn className="Button-hire-me">Hire me</Buttonn>

      <div  className="Menu-burger-main-component-class">
      <CiMenuBurger
        id="fade-button"
        className="Menu-burger-icon"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       
      />
     
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Services</MenuItem>
        <MenuItem onClick={handleClose}>Portfolio</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </div>
 
    </div>
  );
};

export default Header;
