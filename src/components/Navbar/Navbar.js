import React,{useState} from "react";
import { NavHashLink as NavLink } from "react-router-hash-link"


import './Navbar.css'
import logo from '../../assets/Image/excellogowithtext.svg';

function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">

      </div>
      <div className="nav_items">
        <h1>HOME</h1>
        <h1>CONTACT</h1>
        <h1></h1>
      </div>
    </div>
  );
}
export default Navbar;