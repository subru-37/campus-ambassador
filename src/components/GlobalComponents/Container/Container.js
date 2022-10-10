/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import '../Container/Container.css'

const Container = ({ children }) => (
  <div className="container" >
    {children}
  </div>
);


export default Container;
