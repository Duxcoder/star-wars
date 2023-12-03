import { IFormData } from "../../lib/types";
import styled, { keyframes } from "styled-components";

const Tile = ({
  formData,
  isFirst,
}: {
  formData: IFormData;
  isFirst: boolean;
}) => {
  return (
    <TileBox $first={isFirst}>
      <Img src={formData.image} alt={formData.name} />
      <Row>Name: {formData.name} </Row>
      <Row>email: {formData.email} </Row>
      <Row>Age: {formData.age} </Row>
      <Row>Password: {formData.password} </Row>
      <Row>Sex: {formData.sex} </Row>
      <Row>country: {formData.country} </Row>
    </TileBox>
  );
};

export default Tile;

const firstAnimation = keyframes`
  0% {
    border: solid 4px #164208;
  }
  50% {
    border: solid 4px #69ce48;
  }
  100% {
    border: solid 4px #164208;
  }
`;

const TileBox = styled.div<{ $first?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  padding: 1em;
  border: solid 4px #303030;
  border-radius: 0.4em;
  animation-name: ${({ $first }) => $first && firstAnimation};
  animation-duration: 2s;
`;
const Row = styled.div`
  display: flex;
`;
const Img = styled.img`
  max-width: 200px;
  object-fit: contain;
`;
