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
      <Link name="REGISTER" linkTo="#ourClasses" />
      <Button text="LOGIN" />
      <Button text="SIGN UP" />
    </div>
  );
};



export default LinksContainer;
