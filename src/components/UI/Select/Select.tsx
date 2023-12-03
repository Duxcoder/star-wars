import { ChangeEvent, useState } from "react";
import { SelectProps } from "../../../lib/types";
import styled from "styled-components";

export const Select = ({
  list,
  selected,
  label,
  onChange,
  setRef,
}: SelectProps) => {
  const [inputValue, setInputValue] = useState(selected);
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = list.filter((suggestion: string) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filtered);
    onChange && onChange(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFiltered([]);
    onChange && onChange(suggestion);
  };

  return (
    <Container>
      <Label htmlFor={label}>
        <NameInput> {label} </NameInput>
        <Input
          ref={setRef}
          id={label}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Label>
      <List>
        {filtered.map((suggestion) => (
          <Item
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </Item>
        ))}
      </List>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
`;
const NameInput = styled.span`
  display: flex;
`;
const Input = styled.input`
  display: flex;
  font-size: 0.8em;
  padding: 0.4em 1em;
  border-radius: 0.4em;
  border: solid 1px #56585b;
`;
const Label = styled.label`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 2fr;
  justify-items: stretch;
`;
const List = styled.ul`
  position: absolute;
  width: calc(100% / 1.5);
  padding: 0;
  margin: 0;
  right: 0;
  background: #242424;
  border: solid 2px #202020;
  border-radius: 0.4em;
  list-style: none;
  z-index: 1;
`;
const Item = styled.li`
  display: flex;
  padding: 0.2em 1em;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #323232;
  }
`;
