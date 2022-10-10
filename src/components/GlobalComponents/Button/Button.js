/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import './Button.css'

const Button = ({ text }) => (
   <a  href="#/" className="btn">
    {text}
  </a>
);


export default Button;
