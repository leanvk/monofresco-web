import styled from "styled-components";
import colors from "../colors";
import DotStain from "./../svg/dotStain";
import { Logo } from "./../svg/logo";
import { Frame } from "./../svg/frame";
//
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
//
export const Bg = styled.div`
  box-sizing: border-box;
  background-color: ${colors.yellow};
  width: 75vw;
  height: 39vh;
  position: relative;
  display: flex;
`;
//
export const Dot1 = styled(DotStain)`
  position: absolute;

  top: -23%;
  right: -4%;
  transform: scale(3);
  z-index: 2;
  opacity: 0.6;
`;

export const Dot2 = styled(DotStain)`
  position: absolute;
  bottom: -20%;
  left: -5%;
  transform: scale(3.5);
  z-index: -40;
  opacity: 0.6;
`;
//
export const LogoWrapper = styled(Logo)`
  fill: ${colors.green};
  position: absolute;
  bottom: 3%;
  right: 1%;
`;
//
export const TextWrapper = styled.div`
  background: transparent;
  position: absolute;
  top: 1em;
  bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 34%;
  left: -8%;
  margin: none;
  padding: none;
`;

export const TextHeader = styled.h1`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 4em;
  line-height: 1.15em;
  text-align: left;
  color: ${colors.green};
  width: 6em;
  margin: 0em;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 13em;
  height: 2.5em;
  background: ${colors.blue};
  border-radius: 0;
  border: none;

  font-family: Montserrat;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: -0.01em;

  text-align: center;
  color: ${colors.withe};
  margin: 1em;
  padding: 0.7em;
  transition: 0.09s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: ${colors.hoverBlue};
    transition: 0.09s ease-in-out;
  }
`;



export const HeroWrapper = styled.div`
  
`;
export const FrameWrapper = styled(Frame)`
  
`;

export const TextFrame = styled.h2`
  
`;

export const ImgWrapper = styled.img`
  
`;


