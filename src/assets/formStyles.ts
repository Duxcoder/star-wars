import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  font-size: 0.8em;
  margin: 0;
  padding: 0.4em 1em;
  border-radius: 0.4em;
  border: solid 1px #56585b;
`;
export const Submit = styled(Input)`
  display: flex;
  justify-content: center;
  padding: 0.8em 3em;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s;
  &:not(&:disabled):hover {
    background: #56585b;
  }
`;
export const Label = styled.label`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 2fr;
  justify-items: stretch;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
  font-size: 20px;
`;
export const NameInput = styled.span`
  display: flex;
`;
export const SexBlock = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 2fr;
  justify-items: stretch;
`;
export const SexBlockName = styled.span`
  display: flex;
  text-align: left;
  padding: 0;
  margin: 0;
  border: 0;
`;
export const SexBlockContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;
export const SexLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.3em;
`;
export const SelectContainer = styled.div`
  position: relative;
`;
export const ErrorMessage = styled.p`
  position: absolute;
  right: 0;
  bottom: -1.5em;
  padding: 0;
  margin: 0;
  font-size: 0.7em;
  color: #a67b7b;
`;
