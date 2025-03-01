import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";
// Components
import { Button } from "../components/Button/Button";
import { Video } from "../components/Video/Video";
// Animation imports
import { titleAnim, buttonTitleAnim } from "../animations/onLoad_Anim";

export const Opening = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Video />
      <OverlayBG>
        <Title variants={titleAnim} initial="hidden" animate="show">
          Team Fourth Quarter
        </Title>
        <Button
          title="Välkommen"
          onClick={() => navigate("hem")}
          variants={buttonTitleAnim}
          initial="hidden"
          animate="show"
        />
      </OverlayBG>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: #fff;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
`;

const OverlayBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: opacity(0.8);
`;

const Title = styled(motion.h1)`
  font-family: "Play", sans-serif;
  text-transform: uppercase;
  font-size: clamp(2rem, 6vw, 7rem);
  text-align: center;
  color: #f8f8f8;

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
