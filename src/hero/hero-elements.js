import styled from "styled-components";
import colors from "../colors";
import DotStain from "./../svg/dotStain";
import { Logo } from "./../svg/logo";
import {device} from './../device';

import { ReactComponent as hero } from "./../svg/hero.svg";
//
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
  margin:none;
  overflow:hidden;
  background-color:${colors.bg};
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
  


  @media ${device.mobileL} { 
    flex-direction:column;
    width: 100vw;

  }


`;
//
export const Dot1 = styled(DotStain)`
  position: absolute;

  top: -23%;
  right: 0%;
  transform: scale(3);
  z-index: 2;
  opacity: 0.6;

  @media ${device.mobileL} { 
    top: -23%;
  right: 0%;
  transform: scale(5);
  z-index: 2;
  opacity: 0.6;

  }

`;

export const Dot2 = styled(DotStain)`
  position: absolute;
  bottom: -20%;
  left: -5%;
  transform: scale(3.5);
  z-index: -40;
  opacity: 0.6;

  @media ${device.mobileL} { 
    position: absolute;
  bottom: -20%;
  left: -5%;
  transform: scale(6);
  z-index: 0;
  opacity: 0.6;
  }
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

  @media ${device.mobileL} { 
  margin:none;
  margin-left: 0%;
  margin-bottom: 0%;
  }

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

  @media ${device.laptop}{
    font-size: 3.75em;
    margin-right:10%;
  }
  @media ${device.tablet}{
    font-size: 3em;
    margin-right:10%;
  }

  @media ${device.mobileL} { 
 
  
    font-size: 2.2em;
    width: 8em;
    margin:auto;

  
    
    position:absolute;
    top: -51%;
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
  @media ${device.tablet}{
    transform: scale(0.8);
        margin-right: 20%;
    margin-top: 0%;
  }

  @media ${device.mobileL} { 
    visibility:hidden;
  }

  &:hover {
    transform: scale(1.03);
    background: ${colors.hoverBlue};
    transition: 0.2s ease-in-out;
  }
`;



export const Button2 = styled.button`
   visibility:hidden;
  @media ${device.mobileL} { 

    box-sizing: border-box;
  width: 17em;
  height: 3em;
  background: ${colors.blue};
  border-radius: 0;
  border: none;

  font-family: Montserrat;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: -0.01em;

  text-align: center;
  color: ${colors.withe};
  padding: 0.7em;
  transition: 0.09s ease-in-out;
  cursor: pointer;

  
  visibility:visible;
  
  transform: scale(0.75);

  position:absolute;
  top: 131%;

  }

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
    box-sizing:border-box;
    z-index:99;


    
      transition: 0.5s ease-in-out;
     
      &:hover {
    transform: scale(1.05);


    transition: 0.2s ease-in-out;
  }
    

    @media ${device.mobileL} {
     // transform: scale(1.65);
     position: absolute;
    top: -13%;
    left: 18%;
    height: 127%;
    box-sizing: border-box;
    
}

@media ${device.mobileM} {
     // transform: scale(1.65);
     position: absolute;
    top: -13%;
    left: 15%;
    height: 127%;
    box-sizing: border-box;
    
}
@media ${device.mobileM} {
     // transform: scale(1.65);
     position: absolute;
    top: -13%;
    left: 7%;
    height: 127%;
    box-sizing: border-box;
    
}



    
`;


export const LogoWrapper = styled(Logo)`
  fill: ${colors.green};
position:absolute;
  margin:none;
  bottom:1%;
  right:0.25%;
  @media ${device.tablet}{
    transform: scale(0.8);
    bottom: -2%;
    right: -0.5%;
  }


  @media ${device.mobileL} {
    height:20%;
    bottom: 1%;
    right: -2.75%;
    }
`;