/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "../Link/Link";
import Button from "../../GlobalComponents/Button/Button";
import './LinksContainer.css'

const LinksContainer = ({ hidden }) => {
  return (
    <div id="LinksContainer" className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Link name="HOME" linkTo="#home" />
      <Link name="CONTACT" linkTo="#contact" />
      <Button text="LOGIN" />
      <Button text="REGISTER" />
      <a href="javascript:void(0);" className="icon" onclick="myFunction()" >
      <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};



export default LinksContainer;
