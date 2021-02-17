import styled from "styled-components";
import colors from "../colors";
import { Logo } from "./../svg/logo";
import { device } from "./../device";

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
  background-color:${colors.bg};
`;
//
export const Bg = styled.div`
  box-sizing: border-box;
  background-color: ${colors.yellow};
  width: 65vw;
  height: 44vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 730px;
  max-height: 698px;
  min-height:388px;
  margin-right:10%;

  @media ${device.mobileL} {

    margin-right:0%;
  justify-content: center;
  width: 65vw;
  height: 75vh;
  }
`;

export const LogoCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:none;
  background-color: ${colors.withe};
  //padding: 50px;
  border-radius: 50%;
  margin: none;
  
  border: none;
  position:relative;
  min-width:33vw;
  min-height:33vw;
    max-width:33vw;
  max-height:33vw;
  margin-left:-15%;
  @media ${device.mobileL} { 
    position:absolute;
    visibility:hidden;
    right:-1000%;
  }
`;
export const LogoWrapper = styled(Logo)`
  fill: ${colors.black};
  display:flex;
  min-width:17vw;
  min-height:17vw;
    max-width:17vw;
  max-height:17vw;
  

`;

export const FormWrapper = styled.div`
 margin-left:12%;
 @media ${device.mobileL} {

margin-left:0%;
}

`;

export const TextHeader = styled.h1`
  font-family: Montserrat; 
    font-weight: 900;
    font-size: 3em;
    line-height: 1.15em;
    text-align: right;
    color: #00341B;
    width: 8em;
    margin: 0em;
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
    @media ${device.mobileL} {

      text-align: center;
      margin-bottom:14%;
}
`;

export const Form = styled.form`
 display: flex;
justify-content: space-between;
align-items: center;
flex-direction:column;


`;

export const InputText = styled.input.attrs((props) => ({
    
  }))
`
width:100%;
margin: 9px 0% 9px 0%;
height: 3.5%;


border:none;
text-align: right;
font-family: Montserrat; 
    font-weight: 200;
    @media ${device.mobileL} {
      width:60%;
      
}

`;

export const Textarea = styled.textarea`
width:100%;
margin: 9px 0% 9px 0%;
height: 130px;


border:none;
text-align: right;
font-family: Montserrat; 
    font-weight: 200;
    resize: none;
    @media ${device.mobileL} {
      width:60%;
}
`;

export const InputSubmit = styled.input`
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

  @media ${device.mobileL} { 
    margin-top: 14%;
    transform:scale(0.75)

  }

`;
