import { SelectProps } from '../../../types';
import cl from './MySelect.module.css';
import { useEffect, useRef, useState } from 'react';
import { Categories } from '../../../settings';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const MySelect = ({ value, options, onChange, label, disabled }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => (disabled ? null : setIsOpen(!isOpen));
  const rootEl = useRef(null);

  const onClick = (e: Event) => {
    const current = rootEl.current as HTMLElement | null;
    if (current) current.contains(e.target as Node) || setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (disabled) setIsOpen(false);
  }, [disabled]);

  const onOptionClicked = (val: string) => () => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className={cl.select} ref={rootEl}>
      <span className={cl.label}>{label}</span>
      <div className={`${cl.container} ${disabled ? cl.disabled : ''}`}>
        <div className={cl.header} onClick={toggling}>
          {value}
          <div className={cl.icon}>{isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</div>
        </div>
        {isOpen && (
          <div className={cl.listContainer}>
            <ul className={cl.list}>
              {options.map((option, i) => (
                <li className={cl.item} onClick={onOptionClicked(option)} key={i}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySelect;

MySelect.defaultProps = {
  label: '',
  disabled: false,
  options: [
    Categories.Planets,
    Categories.Species,
    Categories.Vehicles,
    Categories.Starships,
    Categories.Films,
    Categories.People,
  ],
};
