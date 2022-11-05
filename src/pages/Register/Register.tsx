import { Logo } from "../../components/Logo/Logo";
import logoImg from "/logo-2x.svg";
import "./Register.css";
import { InputLogin } from "../../components/InputLogin/InputLogin";
import { EnvelopeSimple } from "phosphor-react";

export function Register() {
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
            <InputLogin
              inputType="email"
              label="E-mail"
              placeholder="jonh.doe@example.com"
              icon={<EnvelopeSimple size={24} color="#9CA3AF" stroke="10" />}
            />
          </form>
        </div>
      </main>
    </>
  );
}
