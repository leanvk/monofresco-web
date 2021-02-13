import styled from "styled-components";
import colors from "../colors";
import DotStain from "./../svg/dotStain";
import { Logo } from "./../svg/logo";

import { ReactComponent as hero } from "./../svg/hero.svg";
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
  justify-content:space-between;
  align-Items:center;
  max-width:1047px;
  max-height:300px;
`;
//
export const Dot1 = styled(DotStain)`
  position: absolute;

  top: -23%;
  right: 0%;
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

//
export const TextWrapper = styled.div`
  background: transparent;
  //position: absolute;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:none;
  margin-left: -10%;
  margin-bottom: -8%;



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
  cursor: pointer;
  

  &:hover {
    transform: scale(1.03);
    background: ${colors.hoverBlue};
    transition: 0.2s ease-in-out;
  }
`;

export const HeroWrapper = styled(hero)`

    height:200%;
    margin:none;
    margin-left:-4%;


    #Component_2_1{
      transition: 0.5s ease-in-out;
      transform-origin: -400% center;
      &:hover {
    transform: scale(1.05);

  
    transition: 0.2s ease-in-out;
  }
    }
`;


export const LogoWrapper = styled(Logo)`
  fill: ${colors.green};
  align-self: flex-end;
  margin:none;
  margin-bottom:1%;
  margin-right:1%;
  
`;