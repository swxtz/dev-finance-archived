import { ReactNode } from "react";

export interface AuthInterfaceProps {
  authenticated?: boolean;
  email?: string;
  password?: string;
  login: (email:string, password:string, token?:string) => void;
  user: any;
  logout: () => void;
}

export interface AuthProvicerProps{
  children: any;
}

export interface PrivateProps {
  children:any;
}