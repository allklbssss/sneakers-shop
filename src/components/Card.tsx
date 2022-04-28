import styled from "styled-components";
import { ListItem } from "../data";

type TextAlignValues = 'start' | 'center' | 'end'

type CardProps = { 
  $textAlign?: TextAlignValues
}

const Card: React.FC<ListItem & CardProps> = ({ title, text, $textAlign }) => {
  return (
    <CardWrapper $textAlign={$textAlign}>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{
  $textAlign?: TextAlignValues
}>`
  text-align: ${({ $textAlign }) => $textAlign || 'start'}
`

const CardTitle = styled.p`
  margin: 20px 0 0 0;
  font-size: 16px;
  font-weight: bold;
  /* text-align: end; */
  color: white;
`;
const CardText = styled.p`
  font-size: 11px;
  /* text-align: end; */
  color: white;
`;
export default Card;
