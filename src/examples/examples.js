import React from "react";
import {
  Container,
  Bg,
  Cards,
  TextWrapper,
  TextHeader,
  Button,
  Text,
  MainWrapper,
} from "./examples-elements";


export const Examples = () => {
  return (
    <Container width="100vw" height="90vh" >
      <MainWrapper scale="1.2">
      <Bg>
        <Cards width={1161}
        height={890}></Cards>

        <TextWrapper>
          <TextHeader>Nuestros Modelos</TextHeader>

          <Text> Elije el tuyo y nos encargamos de personalizarlo!</Text>

          <Button>Encarga el tuyo!</Button>
        </TextWrapper>
      </Bg>
      </MainWrapper>
    </Container>
  );
};

export default Examples;
