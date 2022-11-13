import { Logo } from "../../components/Logo/Logo";
import logoImg from "/logo-2x.svg";
import "./Register.css";
import { InputLogin } from "../../components/InputLogin/InputLogin";
import { Check, EnvelopeSimple, Key } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import {
  toastEmailErrorAlert,
  toastPasswordErrorAlert,
  toastThisEmailHasBeenUsed,
  toastUserCreatedAlert
} from "../../errors/toastify";
import { api } from "../../libs/axiox";

export function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  function createAccoutHandle(event: FormEvent) {
    event.preventDefault();
    const email = userEmail.trim();
    const password = userPassword.trim();
    const confirmPassword = userConfirmPassword.trim();

    if (email === "" || !email.includes("@")) {
      toastEmailErrorAlert();
    } else if (password !== confirmPassword) {
      toastPasswordErrorAlert();
    } else {
      api.post("/user", { email, password}).then(response => 
        { if (response.status === 201) {
            toastUserCreatedAlert();
          }
        }).catch(err => {
          if (err.response.status == 400) {
            toastThisEmailHasBeenUsed();
            console.log(err.response.data)
          }
        });
    }
  }

  const pageTitle: string = "Dev.Finance | Crie sua conta";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {}, [userEmail]);

  useEffect(() => {}, [userPassword]);

  useEffect(() => {}, [userConfirmPassword]);

  function onClickCheckboxHandle() {
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  return (
    <>
      <div className="logo-register">
        <Logo logoUrl={logoImg} />
      </div>

      <div className="register-animation">
        <div className="title-register">
          <h2>Insira seus dados</h2>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <main>
          <div className="form">
            <form onSubmit={createAccoutHandle}>
              <div className="inputs">
                <InputLogin
                  inputType="email"
                  label="E-mail"
                  id="email"
                  value={userEmail}
                  onChange={event => setUserEmail(event.target.value)}
                  placeholder="jonh.doe@example.com"
                  icon={
                    <EnvelopeSimple size={24} color="#9CA3AF" stroke="10" />
                  }
                />
                <InputLogin
                  inputType="password"
                  label="Senha"
                  placeholder="*********"
                  id="password"
                  onChange={event => setUserPassword(event.target.value)}
                  icon={<Key size={24} color="#9CA3AF" stroke="10" />}
                />
                <InputLogin
                  inputType="password"
                  label="Repita sua senha"
                  placeholder="*********"
                  id="rePassword"
                  onChange={event => setUserConfirmPassword(event.target.value)}
                  icon={<Key size={24} color="#9CA3AF" stroke="10" />}
                />
              </div>

              <div className="check">
                <div className="wrapper">
                  <div className="CheckWrapper">
                    <CheckboxRadix.Root
                      checked={checked}
                      onCheckedChange={onClickCheckboxHandle}
                      className="CheckRoot"
                    >
                      <CheckboxRadix.Indicator>
                        <Check size={16} weight="bold" color="#15803D" />
                      </CheckboxRadix.Indicator>
                    </CheckboxRadix.Root>
                    <span>
                      você concorda com todos os{" "}
                      <a className="checkbox-link" href="#">
                        termos de serviços
                      </a>
                      ?
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`button-register ${
                  checked ? "button-register-active" : "button-disable"
                }`}
              >
                <Button
                  text="Criar conta"
                  type="submit"
                  disabled={!checked}
                  className="button-register"
                  onClick={event => createAccoutHandle(event)}
                />
              </div>
            </form>
          </div>
          <Link className="link-footer" to="/login">
            <p>Ja possui conta?</p>
          </Link>
        </main>
      </div>
    </>
  );
}
