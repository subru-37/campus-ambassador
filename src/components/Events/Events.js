/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button/Button";

import './Events.css'
const Events = ({ text }) => (
  <section  className="member" style={{  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"}}>
    <h2>
      DON’T <span>THINK</span>, BEGIN <span>TODAY</span>!
    </h2>
    <br />
    <p style={{  width: "70vw"}}>
      Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
      ligula, sit amet dapibus odio augue eget libero.
      <br /> Morbi tempus mauris a nisi luctus imperdiet.
    </p>
    <br />
    <Button text="BECOME A MEMBER" />
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  @media(max-width: 850px) {
    h2{
      font-size: 30px;
    }
    p{
      padding: 0 20px;
      br{
        display: none;
      }
    }
  }
`;

export default Events;
