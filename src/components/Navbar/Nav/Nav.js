/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Logo from "../Logo";
import LinksContainer from "../LinksContainer";
import Container from "../../GlobalComponents/Container";
import './Nav.css'

const Nav = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <nav className="navbar" >
      <Container>
        <Logo />
        <i
          onClick={() => setHidden(!hidden)}
          className={hidden ? "fas fa-bars fa-lg" : "fas fa-times fa-lg"}
          id="burgerMenu"
        ></i>
        <LinksContainer hidden={hidden} />
      </Container>
    </nav>
  );
};


export default Nav;
