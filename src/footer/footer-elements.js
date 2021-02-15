import styled from "styled-components";
import colors from "./../colors";
import { RiInstagramLine } from "react-icons/ri";
import { device } from "./../device";

export const Container = styled.section.attrs((props) => ({
  height: props.height || "170px",
  width: props.width || "100%",
}))`
  background-color: ${colors.black};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  padding-left: 8%;
  padding-right: 8%;
  box-sizing: border-box;
  justify-content: center;
  align-items: space-between;
  padding-top: 20px;
  overflow: hidden;
  @media ${device.mobileL} {
    height: 100%;
    padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
  margin:none;
  padding:none;
  }
`;

export const IconsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  @media ${device.mobileL} {
    margin:auto;
    transform: scale(0.5);
    margin-top: -3%;
  }
`;
export const LeftWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  
`;
export const RightWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  width: 299px;
  box-sizing:border-box;
 
`;
export const Text = styled.p`
  font-family: "Source Sans Pro";
  font-weight: normal;
  font-size: 16px;

  text-align: left;
  color: ${colors.grey};
`;

export const Copyright = styled.section`
  font-family: "Source Sans Pro";
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: left;
  color: ${colors.grey};
  @media ${device.mobileL}{
    text-align: center;
    margin-top: -14%;
    margin-bottom: -4%;
    font-size: 8px;

  }
`;

export const LineDivider = styled.span`
  box-sizing: border-box;
  background: ${colors.grey};
  width: 100%;
  height: 2px;
  border-radius: 1px;
  margin-top: 20px;
  display: inline;
  @media ${device.mobileL} {
    visibility: hidden;
    height: none;
    width: none;
    margin:none;
    padding:none;
  }
`;
export const LogoWrapper = styled.div``;

export const LogoBox = styled.div`
  height: 4em;
  border-radius: 4px;
  width: 4em;
  background: ${colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const IGlogo = styled(RiInstagramLine)`
  width: 27.92px;
  height: 27.91px;
  color: ${colors.withe};
`;
