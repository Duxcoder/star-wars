import { ReactNode, RefObject } from "react";
import { CountryCodes } from "./constants";

export interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
}

export interface IFormData {
  name: string;
  age: number;
  email: string;
  password: string;
  sex: "male" | "female";
  image: string;
  country: CountryCodes;
}
export interface IFormDataYup {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  sex: "male" | "female";
  image: File;
  country: CountryCodes;
  acceptTerms: true;
}

export interface SelectProps {
  label: string;
  list: string[];
  onChange?: (item: string) => void;
  selected: string;
  setRef?: RefObject<HTMLInputElement>;
}
