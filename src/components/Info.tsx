import styled from "styled-components";
import { info } from "../data";
import Card from "./Card";

const Info = () => {
  return (
    <BlockWrapper>
      {info.map(({ title, text }) => (
        <Card title={title} text={text} />
      ))}
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid #ffffff73;
  margin-top: 100px;
`;
export default Info;
