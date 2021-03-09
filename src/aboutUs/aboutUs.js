import React from "react";

import {
  Container,
  Bg,
  TextHeader,
  Text,
  Button,
  Dot1,
  Dot2,
  SvgWrapper,
  AboutUsGyL,
  TextWrapper,

} from "./aboutUs-elements";

function AboutUsSection() {




  return (
    <>
      <Container width="100%">
        <Bg >
          <TextWrapper>
            <TextHeader>Somos Gui y Lean</TextHeader>

            <Text>
              {" "}
              Dos diseñadores comprometidos con ayudarte a hacer de tu evento un
              momento inolvidable.
            </Text>

            <Button>Conoce mas</Button>
          </TextWrapper>
          <Dot1></Dot1>

          <Dot2></Dot2>
        </Bg>

        <SvgWrapper>
          <AboutUsGyL></AboutUsGyL>
        </SvgWrapper>
      </Container>
    </>
  );
}

export default AboutUsSection;
