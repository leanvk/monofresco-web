
import styled from "styled-components";
import { ReactComponent as LogoRaw } from "./logo.svg";
import colors from './../colors'


export const Logo= styled(LogoRaw).attrs(props => ({
  fill: props.fill || colors.grey,
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

export default Logo;