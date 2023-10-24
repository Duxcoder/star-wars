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
    callback: () => {},
  };
  render() {
    return (
      <input
        disabled={this.props.disabled}
        type={this.props.type}
        className={cl.input}
        placeholder={this.props.placeholder}
        onInput={(e) => this.props.callback(e.target.value)}
      ></input>
    );
  }
}

export default MyInput;
