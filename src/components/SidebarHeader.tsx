import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

const SidebarHeader = () => {
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
  display: flex;
  align-items: center;
  gap: 5vh;
  height: 10vh;
`;

const MenuIcon = styled(MenuOutlined)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vh;
  height: 10vh;
  font-size: 25px;
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Title = styled.span`
  font-weight: bold;
  text-align: center;
  color: white;
`;

export default SidebarHeader;
