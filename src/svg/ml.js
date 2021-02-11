
import styled from "styled-components";
import { ReactComponent as LogoRaw } from "./ml.svg";
import colors from './../colors'


export const MlLogo= styled(LogoRaw).attrs(props => ({
  fill: props.fill || colors.withe,
  width: props.width || "10%",
})) `
.st0{
  fill: ${props => props.fill};
}
.st1{
  fill-rule:evenodd;
  clip-rule:evenodd;
  fill:${props => props.fill};
}

`;

export default MlLogo;