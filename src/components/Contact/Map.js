/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.860557733373!2d76.32632371477973!3d10.02836369283174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5006491601%3A0xcf23e14245d4694d!2sGovernment%20Model%20Engineering%20College!5e0!3m2!1sen!2sin!4v1665063996008!5m2!1sen!2sin"
      id="gmap_canvas"
    ></iframe>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;
