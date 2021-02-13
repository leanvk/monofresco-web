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
 
} from "./hero-elements";
import colors from "../colors";

export const Hero = () => {
  return (
    <Container width="100vw" height="90vh">
      <Bg>
        <TextWrapper>
          <TextHeader>Carteles con mucha Onda!!!</TextHeader>
          <Button>Ver modelos</Button>
        </TextWrapper>

        <HeroWrapper>
          
        </HeroWrapper>
        <Dot1></Dot1>

        <Dot2></Dot2>
        <LogoWrapper fill={colors.green} width="75px"></LogoWrapper>
      </Bg>
    </Container>
  );
};

export default Hero;
