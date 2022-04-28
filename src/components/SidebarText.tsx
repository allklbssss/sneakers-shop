import React from "react";
import styled from "styled-components";

const SidebarText = () => {
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem
      excepturi deserunt qui similique est quaerat nostrum explicabo aperiam
      eligendi. Saepe quas distinctio exercitationem sapiente. Vitae saepe
      itaque unde dolor...<b>Read More</b>
    </Text>
  );
};

const Text = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 12px;
`;
export default SidebarText;
