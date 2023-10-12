import { Component } from 'react';
import { InputProps } from '../../../types';
import cl from './MyInput.module.css';
class MyInput extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }
  static defaultProps = {
    type: 'text',
    placeholder: '',
    disabled: false,
  };
  render() {
    return (
      <input
        disabled={this.props.disabled}
        type={this.props.type}
        className={cl.input}
        placeholder={this.props.placeholder}
      ></input>
    );
  }
}

export default MyInput;
