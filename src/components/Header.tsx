import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLink to="#">Main</StyledLink>
      <StyledLink to="#">Men</StyledLink>
      <StyledLink to="#">Women</StyledLink>
      <StyledLink to="#">Collections</StyledLink>
      <ShopButton>SHOP COLLECTION
      <RightOutlined />
      </ShopButton>
    </HeaderWrapper>
  );
};

const StyledLink = styled(Link)`
  text-transform: uppercase;
  color: white;
  font-weight: bold;

  &:hover {
    color: rgba(236, 236, 236, 1);
  }
`;

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  align-items: center;
  gap: 10vw;
  padding-left: max(25vw, 100px);
`;

const ShopButton = styled.button`
position: absolute;
right: 4vw;
height: 6vh;
width: 15vw;
color: white;
font-weight: bold;
background-color: #c74f4f;
box-shadow: 3px 12px 10px 0 rgba(0, 0, 0, 0.15);
border: none;
padding: 15px;
display: flex;
justify-content: space-between;
align-items: center;

&:hover{
  transition-duration: 300ms;
  background-color: #a34747;
}
`
export default Header;
