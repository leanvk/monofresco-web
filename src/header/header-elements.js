import styled from "styled-components";
import colors from "../colors";


export const Container = styled.section.attrs((props) => ({
    height: props.height || "150px",
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
  `;


export const Text= styled.p`
font-family: Montserrat;
font-weight: normal;
font-size: 25px;
text-align: center ;
color: ${colors.withe};

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

`
