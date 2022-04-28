import React from "react";
import styled from "styled-components";
import SidebarSubtitle from "./SidebarSubtitle";
import SidebarText from "./SidebarText";
import SidebarTitle from "./SidebarTitle";

const SidebarTextBlock = () => {
    return (
        <TextBlockWrapper>
            <SidebarTitle/>
            <SidebarSubtitle/>
            <SidebarText/>
        </TextBlockWrapper>
    )
}

const TextBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default SidebarTextBlock