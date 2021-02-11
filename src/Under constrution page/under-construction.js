import styled, { keyframes }  from "styled-components";
import { ReactComponent as Illustration } from "./6943.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const UnderConstruction= styled(Illustration).attrs(props => ({
    height: props.height || '25%',
    width: props.width || "68vw",

  }))`
  
  height:${props => props.height};
  width:${props => props.width};
  padding:0;
  margin:0;
  margin-left:12.5%;
  margin-top: -4%;

  .mins{
    transform-origin: 65.7185625% 22.7401%;
    animation: ${rotate} 60s linear infinite;
  }
  
`

export default UnderConstruction