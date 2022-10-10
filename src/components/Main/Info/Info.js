/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../../GlobalComponents/Button/Button";
import "./Info.css";
import imageicon from "../../../assets/Image/mascotArtboard2.svg";
const Info = () => (
  <>
  <div className="info">
    <div className="imageText">
    <img className="imageFront" src={imageicon} alt="logo" />
    </div>
    <div>
    <div className="introTitle">
       <span className="excel">EXCEL MEC</span>
    </div>
    <div className="introSubtitle">CAMPUS AMBASSADOR</div>
    <button className="button1">REGISTER</button>
    </div>
  </div>
  <div className="bottomContent">
    <div>
    <div className="workshops">
      <div>10+</div>
    <div>workshops</div>
    </div>
    </div>
    <div>
    <div className="lectures">5+</div>
    <div>Lectures</div>
    </div>
    <div>
      <div className="sponsors">20+</div>
      <div>Sponsors</div>
    </div>
  </div>
  </>
);

export default Info;
