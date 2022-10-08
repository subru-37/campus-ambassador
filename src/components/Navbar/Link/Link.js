/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import "./Link.css";

const Link = ({ name, linkTo }) => (
  <a className="link" href={linkTo}>
    {name}
  </a>
);



export default Link;
