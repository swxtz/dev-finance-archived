import { ReactNode } from "react";
import "./styles.css";

interface InputLoginProps {
  label: string;
  inputType: string;
  placeholder?: string;
  icon?: ReactNode;
}

export function InputLogin(props: InputLoginProps) {
  return (
    <div>
      <p>{props.label}</p>
      <div>
        {props.icon}
        <input type={props.inputType} placeholder={props.placeholder}/>
      </div>
    </div>
  )
}