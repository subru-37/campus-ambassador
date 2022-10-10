/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container/Container";
import Map from "./Map";
import Form from "./Form";
import "./contact.css";
import circle1 from "../../assets/Image/Ellipse5.png"
import circle2 from "../../assets/Image/Ellipse7.png"
import circle3 from "../../assets/Image/Ellipse6.png"
const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Container>
      {/* <Map />
      <Form /> */}
      {/* <img src={circle1} alt="" className="circle1"/>
      <img src={circle2} alt="" className="circle2"/>
      <img src={circle2} alt="" className="circle3"/> */}
      <div className="contact-location">
      <div className="random"/>
        <div className="contact-detail">
            <h6>CONTACT</h6>
            <p>
              LOREM ISPUM: 1234567890
            </p>
            <p>
              LOREM ISPUM: 1234567890
            </p>
        </div>
        <div className="random"/>
      </div>
    </Container>
    <Map className="map" />
    <footer className="footer">
      <p>
        Copyright &copy; 2022 EXCEL 
      </p>
    </footer>
  </section>
);

const styles = css`
  width: 100%;
  height: 120vh;
  .container {
    max-width: 100%;
    display: flex;
  }
  footer {
    text-align: center;
    padding: 36px 0;
    p {
      font-size: 14px;
      color: #232d39;
      a {
        text-decoration: none;
        color: #ed563b;
        font-weight: 500;
        &:hover {
          color: #ed563b;
        }
      }
    }
  }
  @media(max-width: 1200px) {
    .container{
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

export default Contact;
