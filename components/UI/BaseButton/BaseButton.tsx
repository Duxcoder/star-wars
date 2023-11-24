import cl from './BaseButton.module.css';

import { ButtonProps } from '../../../@types';

import classNames from 'classnames/bind';
const BaseButton = ({
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
    <button
      data-testid={close ? 'close-button' : 'button'}
      disabled={disabled}
      value={name}
      className={className}
      onClick={callback}
    >
      {children}
      {name}
    </button>
  );
};

export default BaseButton;

BaseButton.defaultProps = {
  name: '',
  disabled: false,
  callback: () => {},
};
