import { Logo } from "../../components/Logo/Logo";
import logoImg from "/logo-2x.svg";
import "./Register.css";
import { InputLogin } from "../../components/InputLogin/InputLogin";
import { Check, EnvelopeSimple, Key } from "phosphor-react";
import { useState } from "react";
import { Checkbox } from "../../components/Checkbox/Checkbox";

export function Register() {
  const [userEmail, setUserEmail] = useState("")
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
          <form action="POST">
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
              <Checkbox icon={<Check size={16} weight="bold" color="#15803D" />} />
            </div>
          </form>
        </div>

        
      </main>
    </>
  );
}
