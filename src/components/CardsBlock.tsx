import styled from "styled-components";
import { card } from "../data";
import Card from "./Card";

const CardsBlock = () => {
  return (
    <BlockWrapper>
      {card.map(({ title, text }) => (
        <Card $textAlign='end' title={title} text={text} />
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
