/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Nav from "../../Navbar/Nav/Nav";

import Overlay from "../Overlay/Overlay";
import Info from "../Info/Info";
import './Main.css'

const Main = () => (
  <section  className="main" id="home">
    <Overlay />
    <Nav />
    <Info />
 
  </section>
);

export default Main;
