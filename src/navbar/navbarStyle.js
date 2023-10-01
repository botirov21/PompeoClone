
import styled from "styled-components";


export const NavDiv=styled.div`
display: flex;
width: 100%;
height: 80px;
background: #FFF;
box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.08);

`
export const LogoDiv=styled.div`
color: #000;
font-family: Pacifico;
font-size: 33px;
font-style: normal;
font-weight: 400;
flex: 1;
align-items: center;
margin-left: 135px;


`
export const NavInfo=styled.div`
flex: 1;
display:flex;
color: #6C6C6C;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 183.333% */
letter-spacing: 2px;
text-transform: uppercase;
align-items: center;
margin-left: 150px;  
cursor: pointer;

`
export const NavInfoMargin=styled.div`
margin-left: 40px;
background: ${props => props.$primary ? "#EBEBEB;" : "white"};
width: ${props => props.$primary ? "2px" : "50px"};
height: ${props => props.$primary ? "38px" : "21px"};
cursor: pointer;
`
export const NavCart=styled.div`
margin-left: 22px;
color: #000;
text-align: center;
font-family: Libre Franklin;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
margin-left: ${props => props.$primary ? "5px" : "22px"};
ma

`