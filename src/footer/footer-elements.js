import styled from "styled-components";
import colors from "./../colors";
import { RiInstagramLine } from "react-icons/ri";

export const Container = styled.section.attrs((props) => ({
  height: props.height || "150px",
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
`;

export const IconsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
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
  justify-content: space-between;
  width: 299px;
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
`;

export const LineDivider = styled.span`
  box-sizing: border-box;
  background: ${colors.grey};
  width: 100%;
  height: 2px;
  border-radius: 1px;
  margin-top: 20px;
  display: inline;
`;
export const LogoWrapper = styled.div``;

export const LogoBox = styled.div`
  width: 4em;
  height: 4em;
  border-radius: 4px;
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
