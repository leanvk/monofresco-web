import React from "react";
import {
  Container,
  IconsWrapper,
  LineDivider,
  Copyright,
  LogoBox,
  IGlogo,
  LeftWrapper,
  RightWrapper,
  Text,

} from "./footer-elements.js";
import Logo from "./../svg/logo.js";
import MlLogo from "./../svg/ml.js";

export const Footer = () => {
  return (
    <Container width="100vw" >
      <IconsWrapper>
        <LeftWrapper>
          <Logo width="53px" height=" 66px"></Logo>{" "}
        </LeftWrapper>
        <RightWrapper>
          <Text>Seguinos</Text>
          <LogoBox>
            <a href='https://www.instagram.com/monofresco.carteles/' target='_blank' rel="noreferrer"><IGlogo></IGlogo></a>
          </LogoBox>
          <LogoBox>
          <a href='https://listado.mercadolibre.com.ar/monofresco#D[A:monofresco]'target='_blank' rel="noreferrer"><MlLogo width="41px" height=" 28px"></MlLogo></a>
          </LogoBox>
        </RightWrapper>
      </IconsWrapper>

      <LineDivider></LineDivider>

      <Copyright>
      <p>© 2021, Monofresco.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
