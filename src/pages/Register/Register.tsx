import { Logo } from "../../components/Logo/Logo";
import logoImg from "/logo-2x.svg";
import "./Register.css";
import { InputLogin } from "../../components/InputLogin/InputLogin";
import { Check, EnvelopeSimple, Key } from "phosphor-react";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import * as CheckboxRadix from "@radix-ui/react-checkbox";


export function Register() {
  
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");
  const [checked, setChecked] = useState(true);

  function loginFormHandle(event: FormEvent) {
    event.preventDefault();
    console.log(userEmail);
    console.log(userPassword);
    console.log(userRePassword);

  }

  useEffect(() => {
    
  } ,[userEmail])

  useEffect(() => {
    
  } ,[userPassword])

  useEffect(() => {
    
  } ,[userRePassword])

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
          <form onSubmit={loginFormHandle} >
            <div className="inputs">
              <InputLogin
                inputType="email"
                label="E-mail"
                id="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                placeholder="jonh.doe@example.com"
                icon={<EnvelopeSimple size={24} color="#9CA3AF" stroke="10" />}
              />
              <InputLogin
                inputType="password"
                label="Senha"
                placeholder="*********"
                id="password"
                onChange={(event) => setUserPassword(event.target.value)}
                icon={<Key size={24} color="#9CA3AF" stroke="10" />}
              />
              <InputLogin
                inputType="password"
                label="Repita sua senha"
                placeholder="*********"
                id="rePassword"
                onChange={(event) => setUserRePassword(event.target.value)}
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
                    você concorda com todos os <a className="checkbox-link" href="#">termos de serviços</a>?
                  </span>
                </div>
              </div>
            </div>

            <div className={`button-register ${checked ? "" : "button-disable"}`}>
              <Button
                text="Criar conta"
                type="submit"
                disabled={!checked}
                onClick={(event) => loginFormHandle(event)}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
