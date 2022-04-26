import styled from "styled-components";
import { ListItem } from "../data";

const Card: React.FC<ListItem> = ({ title, text }) => {
  return (
    <>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </>
  );
};

const CardTitle = styled.p`
  margin: 20px 0 0 0;
  font-size: 16px;
  font-weight: bold;
  text-align: end;
  color: white;
`;
const CardText = styled.p`
  font-size: 11px;
  text-align: end;
  color: white;
`;
export default Card;
