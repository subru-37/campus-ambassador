/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../../GlobalComponents/Button/Button";
import "./Info.css";
import imageicon from "../../../assets/Image/mascotArtboard.svg";
const Info = () => (
  <div className="info">
    <div>
    <img className="imageFront" src={imageicon} alt="logo" />
    </div>
    <div>
    <p>Be the next Campus Ambassador</p>
    <h1>
      Excel with our <span className="excel">EXCEL 2022</span>
    </h1>
    <Button className="button1" text="REGISTER" />
    </div>
  </div>
);

export default Info;
