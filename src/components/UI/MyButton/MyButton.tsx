import { ButtonProps } from '../../../types';
import cl from './MyButton.module.css';

const MyButton = ({ name, disabled, callback, children }: ButtonProps) => {
  return (
    <button disabled={disabled} className={cl.button} onClick={callback}>
      {children}
      {name}
    </button>
  );
};

export default MyButton;

MyButton.defaultProps = {
  name: '',
  disabled: false,
  callback: () => {},
};
