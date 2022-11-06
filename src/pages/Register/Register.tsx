import { Logo } from "../../components/Logo/Logo";
import logoImg from "/logo-2x.svg";
import "./Register.css";
import { InputLogin } from "../../components/InputLogin/InputLogin";
import { Check, EnvelopeSimple, Key } from "phosphor-react";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import * as CheckboxRadix from "@radix-ui/react-checkbox";

export function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [checked, setChecked] = useState(false);

  function loginFormHandle(event: any) {
    event.preventDefault();
  }

  function onClickCheckboxHandle() {
    if(!checked) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }
  return (
    <>
      <div className="logo">
        <Logo logoUrl={logoImg} />
      </div>

      <div className="title">
        <h2>Insira seus dados</h2>
      </div>

      <main>
        <div className="form">
          <form method="POST">
            <div className="inputs">
              <InputLogin
                inputType="email"
                label="E-mail"
                placeholder="jonh.doe@example.com"
                icon={<EnvelopeSimple size={24} color="#9CA3AF" stroke="10" />}
              />
              <InputLogin
                inputType="password"
                label="Senha"
                placeholder="*********"
                icon={<Key size={24} color="#9CA3AF" stroke="10" />}
              />
              <InputLogin
                inputType="password"
                label="Repita sua senha"
                placeholder="*********"
                icon={<Key size={24} color="#9CA3AF" stroke="10" />}
              />
            </div>

            <div className="check">
              <div className="wrapper">
                <div className="CheckWrapper">
                  <CheckboxRadix.Root checked={checked} onCheckedChange={onClickCheckboxHandle} className="CheckRoot">
                    <CheckboxRadix.Indicator>
                      <Check size={16} weight="bold" color="#15803D" />
                    </CheckboxRadix.Indicator>
                  </CheckboxRadix.Root>
                  <span>
                    você concorda com todos os 
                    <a href="#">termos de serviços?</a>
                  </span>
                </div>
              </div>
            </div>

            <div className={`button-register ${checked ? "" : "button-disable"}`}>
              <Button
                text="Criar conta"
                type="submit"
                onClick={e => loginFormHandle(e)}
                disabled={!checked}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
