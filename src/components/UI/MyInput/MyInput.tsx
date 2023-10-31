import { FormEvent } from 'react';
import { InputProps } from '../../../types';
import cl from './MyInput.module.css';

const MyInput = ({ value, type, placeholder, disabled, callback }: InputProps) => {
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

export default MyInput;

MyInput.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  callback: () => {},
};
