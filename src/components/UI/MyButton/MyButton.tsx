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
  };
  render() {
    return (
      <button disabled={this.props.disabled} className={cl.button}>
        {this.props.name}
      </button>
    );
  }
}
export default MyButton;
