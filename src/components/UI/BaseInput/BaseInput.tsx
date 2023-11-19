import cl from './BaseInput.module.css';

import { InputProps } from '../../../types';

import { FormEvent } from 'react';

const BaseInput = ({ value, type, placeholder, disabled, callback }: InputProps) => {
  const returnValue = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      callback(target.value.trim());
    }
  };
  return (
    <input
      value={value}
      disabled={disabled}
      type={type}
      className={cl.input}
      placeholder={placeholder}
      onInput={returnValue}
    ></input>
  );
};

export default BaseInput;

BaseInput.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  callback: () => {},
};
