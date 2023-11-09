import { ButtonProps } from '../../../types';
import cl from './MyButton.module.css';
import classNames from 'classnames/bind';
const MyButton = ({
  name,
  disabled,
  active,
  callback,
  circle = false,
  close = false,
  children = '',
}: ButtonProps) => {
  const cx = classNames.bind(cl);
  const className = cx({
    button: true,
    active,
    circle,
    close,
  });
  return (
    <button disabled={disabled} value={name} className={className} onClick={callback}>
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
