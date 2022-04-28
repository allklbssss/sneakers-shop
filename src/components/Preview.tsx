import { ArrowRightOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import CardsBlock from "./CardsBlock";
import Info from "./Info";
import SidebarHeader from "./SidebarHeader";
import SidebarTextBlock from "./SidebarTextBlock";

const Preview = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <PreviewWrapper backgroundColor={"#DA6666"}>
      <StyledDrawer
        placement="left"
        visible={visible}
        onClose={() => setVisible(false)}
        mask={true}
        maskClosable={true}
        width={"max(500px, 40vw)"}
        contentWrapperStyle={{
          backdropFilter: "blur(50px)",
        }}
      >
        <SidebarHeader />
        <SidebarTextBlock />
        <Info />
      </StyledDrawer>
      {!visible && (
        <TriggerButton onClick={() => setVisible(true)}>
          <ArrowRightOutlined />
        </TriggerButton>
      )}
      <img src={"https://i.ibb.co/dMPVCJD/1.png"} alt="sneakers" />
      <CardsBlockWrapper>
        <CardsBlock />
      </CardsBlockWrapper>
    </PreviewWrapper>
  );
};

const CardsBlockWrapper = styled.div`
  position: absolute;
  right: 4vw;
  top: 25vh;
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content {
    background-color: transparent;

    .ant-drawer-body {
      padding: 18% 7% 0 18%;
    }

    .ant-drawer-header {
      height: 10vh;
      background-color: rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0;

      .ant-drawer-close {
        display: none;
      }
    }
  }
  .ant-drawer-mask {
    background: rgba(0, 0, 0, 0);
  }
`;

const TriggerButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2.5vh;
  left: 2.5vh;
  height: 5vh;
  width: 5vh;
  color: white;
  font-size: 1.4em;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const PreviewWrapper = styled.div<{
  backgroundColor: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 0 15vw 7.5vh;
  justify-content: end;
  width: 100vw;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px -40vh 30vh -20vh rgba(0, 0, 0, 0.3) inset;
  overflow: hidden;
`;

export default Preview;
