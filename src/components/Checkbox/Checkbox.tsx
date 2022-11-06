import "./styles.css";
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { ReactNode } from "react";

interface CheckboxProps {
  icon: ReactNode;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div className="wrapper">
      <div className="CheckWrapper">
       <CheckboxRadix.Root className="CheckRoot">
        <CheckboxRadix.Indicator>
          {props.icon}
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <span>você concorda com todos os <a href="#">termos de serviços?</a></span>
      </div>
    </div>
  )
}