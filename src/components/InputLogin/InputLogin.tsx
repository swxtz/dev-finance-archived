import { ReactNode } from "react";
import { Input } from "semantic-ui-react";
import "./styles.css";

interface InputLoginProps{
  label: string;
  inputType: string;
  placeholder?: string;
  icon?: ReactNode;
}

export function InputLogin(props: InputLoginProps) {
  return (
    <div className="wrapper">    
      <p>{props.label}</p>
        <div className="input">
          {props.icon}
          <input type={props.inputType} placeholder={props.placeholder} />
      </div>
    </div>

  );
}
