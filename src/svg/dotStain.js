import styled from "styled-components";
import { ReactComponent as svg } from "./dot-stain.svg";
import colors from './../colors'


export const DotStain= styled(svg).attrs(props => ({
  fill: props.fill || colors.deepBlue,
  width: props.width || "10%",

})) `
*{
  fill: ${props => props.fill};
}

`;

export default DotStain;