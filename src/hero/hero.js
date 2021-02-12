import React from "react";
import {
  Container,
  Bg,
  TextWrapper,
  Button,
  Dot1,
  Dot2,
  LogoWrapper,
  TextHeader,
  HeroWrapper,
  FrameWrapper,
  TextFrame,
  ImgWrapper,
} from "./hero-elements";
import colors from "../colors";

export const Hero = () => {
  return (
    <Container width="100%" height="90vh">
      <Bg>
        <TextWrapper>
          <TextHeader>Carteles con mucha Onda!!!</TextHeader>
          <Button>Ver modelos</Button>
        </TextWrapper>

        <HeroWrapper>
          <FrameWrapper>
            <TextFrame> Adios Universidad</TextFrame>
          </FrameWrapper>
          <ImgWrapper></ImgWrapper>
        </HeroWrapper>
        <Dot1></Dot1>

        <Dot2></Dot2>
        <LogoWrapper fill={colors.green} width="50px"></LogoWrapper>
      </Bg>
    </Container>
  );
};

export default Hero;
