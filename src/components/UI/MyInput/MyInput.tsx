import { Component, FormEvent } from 'react';
import { InputProps } from '../../../types';
import cl from './MyInput.module.css';

class MyInput extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }
  static defaultProps = {
    value: '',
    type: 'text',
    placeholder: '',
    disabled: false,
    callback: () => {},
  };
  returnValue = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.props.callback(target.value.trim());
    }
  };
  render() {
    return (
      <input
        value={this.props.value}
        disabled={this.props.disabled}
        type={this.props.type}
        className={cl.input}
        placeholder={this.props.placeholder}
        onInput={this.returnValue}
      ></input>
    );
  }
}

export default MyInput;
