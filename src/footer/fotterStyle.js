import styled from "styled-components";

export const FotterDIv = styled.div`
height: 511px;
flex-shrink: 0;
background: rgba(219, 219, 219, 0.10);
h1{
display: flex;
justify-content: center;
padding-top: 107px;
color: #000;
font-family: Pacifico;
font-size: 33px;
font-style: normal;
font-weight: 400;
line-height: 40px; /* 121.212% */

}
.FooterTitleP{
color: #6C6C6C;
text-align: center;
font-family: Libre Franklin;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
width: 300px;
margin-left:600px;
margin-top:30px;
}
`
export const ContactInfo=styled.div`
display: grid;
grid-template-areas:" a a a";
justify-content: center;
gap: 20px;
margin-top:63px;
.contactdiv{
display: flex; 
flex-direction: column;
width: 371px;
height: 127px;
flex-shrink: 0;
align-items: center;
}
.imageSize{
width: 40px;
height: 40px;
flex-shrink: 0;
}
p{
color: #6C6C6C;
text-align: center;
font-family: Libre Franklin;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
}
`