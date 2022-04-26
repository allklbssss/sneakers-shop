import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

const HeaderPreview = () => {
  return (
    <Menu>
      <MenuIcon />
      <Title>Explore</Title>
    </Menu>
  );
};

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 10vh;
  border-left: 2.3px solid white;
`;

const MenuIcon = styled(MenuOutlined)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6vw;
  height: 10vh;
  font-size: 25px;
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Title = styled.span`
  position: absolute;
  top: 4vh;
  left: 8vw;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export default HeaderPreview;
