import styled from "styled-components";
import colors from "../colors";
import { device } from "./../device";
import Exp from "./../svg/example";

export const Container = styled.section.attrs((props) => ({
  // height: props.height || "150px",
  // width: props.width || "100%",
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  overflow: hidden;
  background-color: ${colors.bg};
`;

export const Bg = styled.div`
  box-sizing: border-box;
  background-color: ${colors.yellow};
  width: 80vw;
  height: 44vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${device.mobileL} {
    width: 60vw;
    height: 75vh;
  }

`;

export const Cards = styled(Exp)`
      position: absolute;
      transform-origin:-50%-50%;
      top: -59%;
    left: 0;
   
    transform: scale(.9);
    @media ${device.laptop} {
      top: 0%;
    left: 8%;
   
    transform: scale(.7);
  }
  @media ${device.tablet} {
    top: 45%;
    left: 30%;
   
    transform: scale(.55);
  }
  @media ${device.mobileL} {
    top: 65%;
    left: 118%;
    transform: scale(.40);
  }
  @media ${device.mobileM} {
    
    top: 54%;
    left: 61%;

    transform: scale(.47);
  }
`;

export const TextWrapper = styled.div`
  background: transparent;
  //position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  
  
  margin: none;
  margin-right:2%;

  @media ${device.laptop} {
    margin: none;
    margin-left: 0%;
    margin-bottom: 0%;
  }
  @media ${device.tablet} {
    margin: none;
    margin-left: 0%;
    margin-bottom: 0%;
  }
  @media ${device.mobileL} {
    margin: none;
    margin-left: 0%;
    margin-bottom: 0%;
  }
`;

export const TextHeader = styled.h1`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 6em;
  line-height: 1.15em;
  text-align: right;
  color: ${colors.green};
  width: 6em;
  margin: 0em;

  @media ${device.laptop} {
    font-size: 4em;
  }
  @media ${device.tablet} {
    font-size: 3em;
  }

  @media ${device.mobileL} {
  }
`;

export const Text = styled.p`
  font-family: Montserrat;
  text-align: right;
  font-size: 2em;
  width: 10em;
  @media ${device.tablet} {
    font-size: 1em;
  }
  @media ${device.mobileL} {
    margin-top:90%;
    text-align:center;
    align-self:center;
    
    font-size: 1.25em;
  }
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
  cursor: pointer;
  transform: scale(1.35);

  @media ${device.laptop} {
    transform: scale(1);
  }
  @media ${device.tablet} {
    transform: scale(0.8);
    transform-origin:120%;
  }

  @media ${device.mobileL} {
    
    transform: scale(0.8);
    transform-origin:100%;
  }

  &:hover {
    transform: scale(1.03);
    background: ${colors.hoverBlue};
    transition: 0.2s ease-in-out;
  }
`;
