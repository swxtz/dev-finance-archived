import { ReactNode } from "react";

export interface AuthInterfaceProps {
  authenticated?: boolean;
  email?: string;
  password?: string;
  login: () => void;
  user: boolean | null;
  logout: () => void;
}

export interface AuthProvicerProps{
  children: any;
}