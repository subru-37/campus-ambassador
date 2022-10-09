/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import logo from '../../../assets/Image/excellogowithtext.svg'
import'./Logo.css';

const Logo = () => (
  <>
    <img className="logoExcel" src={logo} alt='logo' />
  </>
);



export default Logo;
