import { ChangeEvent, useState } from "react";
import { SelectProps } from "../../../lib/types";

export const Select = ({ list, onChange, selected, label }: SelectProps) => {
  const [inputValue, setInputValue] = useState(selected);
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = list.filter((suggestion: string) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filtered);
    onChange(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFiltered([]);
    onChange(suggestion);
  };

  return (
    <div>
      <label htmlFor={label}>
        <span> {label} </span>
        <input
          id={label}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <ul>
        {filtered.map((suggestion) => (
          <li
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};
