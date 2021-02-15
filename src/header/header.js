import React from "react";
import { Container, Text, ListWrapper, ListEntry,  } from "./header-elements";

export const Header = () => {
  return (
  
  <Container width="100vw" >

    <Text>Monofresco</Text>

    <ListWrapper>
        <ListEntry>Inicio</ListEntry>
        <ListEntry>Nosotros</ListEntry>
        <ListEntry>Carteles</ListEntry>
        <ListEntry>Contacto</ListEntry>
    </ListWrapper>


  </Container>
  )};

export default Header;
