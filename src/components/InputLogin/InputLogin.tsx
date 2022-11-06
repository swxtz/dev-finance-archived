import { InputHTMLAttributes, ReactNode } from "react";
import { Input } from "semantic-ui-react";
import "./styles.css";

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  inputType: string;
  icon?: ReactNode;
}

export function InputLogin({ label, inputType, placeholder, icon, ...rest }: InputLoginProps) {
  return (
    <div className="wrapper">    
      <p>{label}</p>
        <div className="input">
          {icon}
          <input {...rest} type={inputType} placeholder={placeholder} />
      </div>
    </div>

  );
}
