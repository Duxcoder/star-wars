import { ReactNode } from "react";

export interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
}
