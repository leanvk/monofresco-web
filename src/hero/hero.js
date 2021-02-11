import React from "react";
import { Container, Bg, TextWrapper,Button,ImgWrapper,Dot1,Dot2, LogoWrapper } from "./hero-elements";
import colors from "../colors";

export const Hero = () => {
  return (
  
  <Container width="100%" height="90vh">

    <Bg>
      <TextWrapper></TextWrapper>
      <Button>Ver modelos</Button>
      <ImgWrapper>
      </ImgWrapper>
      
      <Dot1></Dot1>
      <Dot2></Dot2>
      <LogoWrapper fill={colors.green} width='50px'></LogoWrapper>

    </Bg>

   

  </Container>
  )};

export default Hero;