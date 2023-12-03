import { Link } from "react-router-dom";
import { CardProps } from "../../lib/types";
import styled from "styled-components";
const Card = ({ title, description, path, icon }: CardProps) => {
  return (
    <CardContainer>
      {icon}
      <Link to={path}>
        <Button>{title}</Button>
      </Link>
      <Description>{description}</Description>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  gap: 1em;
`;

const Description = styled.p`
  color: #888;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
export default Card;
