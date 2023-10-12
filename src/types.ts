import { ReactNode } from 'react';

export interface HeaderProps {
  logo: string;
}
export interface ButtonProps {
  name: string;
  disabled: boolean;
  children: ReactNode;
}

export interface InputProps {
  placeholder: string;
  disabled: boolean;
  type: 'text' | 'search';
}
