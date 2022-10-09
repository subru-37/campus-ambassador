/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Logo from "../Logo/Logo";
import LinksContainer from "../LinksContainer/LinksContainer";
import Container from "../../GlobalComponents/Container/Container";
import "./Nav.css";

const Nav = () => {
  const [hidden, setHidden] = useState(true);

  return (
    // <>
    /* <div style={{width: '100px'}}></div> */
    <nav className="navbar">
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
    // <div></div>
    // </>
    
  );
};

export default Nav;
