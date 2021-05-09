
import styled from "styled-components";
import colors from "../colors";
import { device } from "./../device";
import { AboutUs } from "./../svg/aboutUs.js";
import DotStain from "./../svg/dotStain";


export const Container = styled.section.attrs((props) => ({
  // height: props.height || "150px",
  // width: props.width || "100%",
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
 
  margin-top: 5%;
  margin-bottom:5%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  overflow: visible;
  background-color: ${colors.bg};
  padding-left: 3%;



`;

export const MainWrapper = styled.div`
 transform: scale(1.2);
 display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    transform: scale(.99);

  }
  @media ${device.tablet} {
    transform: scale(.8);

  }
  @media ${device.mobileL} {
   flex-direction:column; 
  }
`

export const Bg = styled.div`
  box-sizing: border-box;
  background-color: ${colors.yellow};
  width: 307px;
  height: 400px;
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;
  z-index: 2;
  //margin-left:-32%;
  padding-top: 7%;
  @media ${device.mobileL} {
 

    width: 450px;
height: 275px;


  }
`;

export const TextWrapper = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextHeader = styled.h1`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 4em;
  line-height: 1.15em;
  text-align: right;
  color: ${colors.green};

  width: 6em;
  margin-top: -41%;

  @media ${device.laptop} {
  
  }
  @media ${device.tablet} {
    
  }

  @media ${device.mobileL} {
    font-size: 4em;
    text-align: left;
    margin-top: -20%;
  }
`;

export const Text = styled.p`
  font-family: Montserrat;
  text-align: right;
  font-size: 1em;
  width: 16em;
  line-height: 180%;
  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
    text-align: left;
    align-self: flex-start;
    margin-top:-10%;
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
  margin-top: 22%;
  padding: 0.7em;
  transition: 0.09s ease-in-out;
  cursor: pointer;
  transform: scale(1);

  @media ${device.laptop} {
    transform: scale(1.1);
    margin-top: 22%;
  }
  @media ${device.tablet} {
    
  }

  @media ${device.mobileL} {
    margin-top: 0%;

    
  }

  &:hover {
    transform: scale(1.03);
    background: ${colors.hoverBlue};
    transition: 0.2s ease-in-out;
  }
`;

export const SvgWrapper = styled.div`
 margin-top: 6px;
margin-left: 102px;

@media ${device.mobileL} {
  margin-left:0;

  }
 
`;



export const AboutUsGyL = styled(AboutUs)`
`;

export const Dot1 = styled(DotStain)`
  position: absolute;
  top: -10%;
  right: -4%;
  -webkit-transform: scale(3);
  -ms-transform: scale(3);
  transform: scale(5);
  z-index: 1;
  opacity: 0.6;
`;

export const Dot2 = styled(DotStain)`
  position: absolute;
  bottom: -9%;
  left: -5%;
  transform: scale(5);
  z-index: -40;
  opacity: 0.6;

  @media ${device.mobileL} {
    position: absolute;
    bottom: -20%;
    left: -5%;
    transform: scale(1);
    z-index: 0;
    opacity: 0.6;
  }
`;