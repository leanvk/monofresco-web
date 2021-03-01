import React from "react";
import { Container, Bg, LogoWrapper, FormWrapper, Form, TextHeader, InputText, InputSubmit, LogoCircle,Textarea } from "./form-elements";

import colors from "../colors";

export const FormSection = () => {
  return (
    <Container width="100vw" height="90vh">
      <Bg>
        <LogoCircle>
        <LogoWrapper fill={colors.green} width="20vh"></LogoWrapper>
        </LogoCircle>

        <FormWrapper>
          <Form>
            <TextHeader>Contactate con nosotros</TextHeader>
            <InputText type="text" placeholder="nombre"/>
            <InputText type="text" placeholder="email"/>
            <InputText type="text" placeholder="modelo"/>
            <Textarea placeholder="Cuentanos como quieres tu cartel"></Textarea>  
            <InputSubmit type="submit" onClick={e=>e.preventDefault}/>
          </Form>
        </FormWrapper>
      </Bg>
    </Container>
  );
};

export default FormSection;