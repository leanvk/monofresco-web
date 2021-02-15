import styled from "styled-components";
import colors from "../colors";
import {device} from './../device';

export const Container = styled.section.attrs((props) => ({
    
    width: props.width || "100%",
  }))`
    background-color: ${colors.black};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    display: flex;
    padding-left: 8%;
    padding-right: 8%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    overflow:hidden;

    @media ${device.mobileL}{
      justify-content: center;
      height:80%;
    }

  `;


export const Text= styled.p`
font-family: Montserrat;
font-weight: normal;
font-size: 25px;
text-align: center ;
color: ${colors.withe};
display:flex;
@media ${device.mobileL}{
  font-size: 12px;
    }
`

export const ListWrapper= styled.ul`
 list-style-type: none; 
  padding: 0;
  margin: 0; 
  font-family: Montserrat;
font-weight: bold;
font-size: 16px;
line-height: 28px;
text-align: center;
color:  ${colors.withe};
display: flex;
@media ${device.mobileL}{
    visibility:hidden;  
    }

`

export const ListEntry= styled.li`

padding-left: 2%;
padding-right: 2%;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover{
  color:  ${colors.yellow};
  transition: 0.09s ease-in-out;
}
@media ${device.mobileL}{
    visibility:hidden;  
    height:0;
    width:0;
    }
`
