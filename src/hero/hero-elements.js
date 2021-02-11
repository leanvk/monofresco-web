import styled from "styled-components";
import colors from "../colors";
import DotStain from "./../svg/dotStain";
import { Logo } from "./../svg/logo";

export const Container = styled.section.attrs((props) => ({
  height: props.height || "150px",
  width: props.width || "100%",
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bg = styled.div`
  box-sizing: border-box;
  background-color: ${colors.yellow};
  width: 75vw;
  height: 39vh;
  position: relative;
  display: flex;
 
`;

export const Dot1 = styled(DotStain)`
  position: absolute;
  
  top: -60%;
  right: -4%;
  transform: scale(3);
`;

export const Dot2 = styled(DotStain)`
  position: absolute;
  bottom: -60%;
  left: -5%;
  transform: scale(3.5);
  z-index: 0;
`;

export const LogoWrapper = styled(Logo)`
  fill: ${colors.green};
  position: absolute;
  bottom: 3%;
  right: 1%;
`;

export const TextWrapper = styled.div`
  content: "";
`;

export const Button = styled.button`
  content: "";
  position: absolute;
  width: 150px;
height: 50px;
background: ${colors.blue};
border-radius:0;
border:none;

font-family: Montserrat;
font-weight: 300;
font-size: 20px;
letter-spacing: -0.01em;

text-align: center;
color: ${colors.withe};


`;

export const ImgWrapper = styled.div``;
