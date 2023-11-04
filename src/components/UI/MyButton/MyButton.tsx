import { ButtonProps } from '../../../types';
import cl from './MyButton.module.css';

const MyButton = ({
  name,
  disabled,
  active,
  callback,
  circle = false,
  children = '',
}: ButtonProps) => {
  const getClasses = () => `${cl.button} ${active ? cl.active : ''} ${circle ? cl.circle : ''}`;
  return (
    <button disabled={disabled} value={name} className={getClasses()} onClick={callback}>
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
