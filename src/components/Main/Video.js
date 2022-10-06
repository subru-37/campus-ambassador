/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";


const Video = () => (
  // <video css={styles} autoPlay muted loop>
  //   <source src={VideoBg} type="video/mp4" />
  // </video>
  <img css={styles} src="https://media.istockphoto.com/photos/3d-render-abstract-background-ultraviolet-neon-light-holographic-picture-id1080309524?b=1&k=20&m=1080309524&s=170667a&w=0&h=VFAc8OiDzOajd0WqEKlKP_QYAWBcC0de9YID_cJ5U3Y=" alt ='logo' />
);

const styles = css`
  min-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  max-height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export default Video;
