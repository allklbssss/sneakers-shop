import styled from "styled-components";
import { data } from "../data";
import Card from "./Card";

const CardsBlock = () => {
  return (
    <BlockWrapper>
      {data.map(({ title, text }) => (
        <Card title={title} text={text} />
      ))}
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  width: 12vw;
  display: flex;
  flex-direction: column;
`;
export default CardsBlock;
