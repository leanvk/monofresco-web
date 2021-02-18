import styled from "styled-components";
import colors from "../colors";
import { device } from "./../device";
import Exp from './../svg/example';

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
  justify-content: space-between;
  align-items: center;


  @media ${device.mobileL} {
  }
`;

export const Cards = styled(Exp)``;

export const TextWrapper = styled.div`
  background: transparent;
  //position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  margin-left: -10%;
  margin-bottom: -8%;

  @media ${device.mobileL} {
    margin: none;
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

  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }

  @media ${device.mobileL} {
  }
`;

export const Text = styled.p``;

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
  @media ${device.tablet} {
  }

  @media ${device.mobileL} {
  }

  &:hover {
    transform: scale(1.03);
    background: ${colors.hoverBlue};
    transition: 0.2s ease-in-out;
  }
`;
