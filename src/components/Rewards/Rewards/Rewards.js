/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../../GlobalComponents/Icon/Icon";
import RewardsTitle from "../RewardsTitle/RewardsTitle";
import RewardsSubtitle from "../RewardsSubtitle/RewardsSubtitle";
import RewardsCard from "../RewardsCard/RewardsCard";
import Container from "../../GlobalComponents/Container/Container";

const Rewards = () => (
  <div css={styles} className="Rewards">
    <RewardsTitle />
    <Icon />
    <RewardsSubtitle />
    <Container>
      <RewardsCard
        title="Lorem Ipsum"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus"
      />
      <RewardsCard
        title="Lorem Ipsum"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus"
      />
      <RewardsCard
        title="Lorem Ipsum"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus"
      />
      <RewardsCard
        title="Lorem Ipsum"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus"
      />
      <RewardsCard
        title="Lorem Ipsum"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus"
      />
      <RewardsCard
        title="Lorem Ipsum"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim ex, iaculis vel placerat ut, consectetur lacinia risus"
      />
    </Container>
  </div>
);

const styles = css`
  background: linear-gradient(180deg, #050d18 82.03%, #001c3d 100%);
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Rewards;
