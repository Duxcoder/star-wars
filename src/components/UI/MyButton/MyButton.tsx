import { Component } from 'react';
import { ButtonProps } from '../../../types';
import cl from './MyButton.module.css';

class MyButton extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }
  static defaultProps = {
    name: '',
    disabled: false,
    callback: () => {},
  };
  render() {
    return (
      <button disabled={this.props.disabled} className={cl.button} onClick={this.props.callback}>
        {this.props.children}
        {this.props.name}
      </button>
    );
  }
}
export default MyButton;
