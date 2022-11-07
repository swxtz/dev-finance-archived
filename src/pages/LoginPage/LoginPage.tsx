import { CircleNotch, EnvelopeSimple, Key, Password } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Button } from "../../components/Button/Button";
import { InputLogin } from "../../components/InputLogin/InputLogin";
import { Logo } from "../../components/Logo/Logo";
import "./LoginPage.css";
import logoImg from "/logo-2x.svg";
import "react-toastify/dist/ReactToastify.css";
import {
  toastEmailErrorAlert,
  toastPasswordNotValidErrorAlert,
  toastPasswordOrEmailWrong
} from "../../errors/toastify";
import { Link, useNavigate } from "react-router-dom";

export function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [enableLogin, setEnableLogin] = useState(true);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const authFake = {
    email: "teste@teste.com",
    password: "teste"
  };

  const navigate = useNavigate();

  const pageTitle: string = "Dev.Finance | Login";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  function loginFormHandle(event: FormEvent) {
    event.preventDefault();
    const email = userEmail.trim();
    const password = userPassword.trim();

    const timeout: number = 1500;

    if (email === "" || !email.includes("@")) {
      toastEmailErrorAlert();
    } else if (password === "") {
      toastPasswordNotValidErrorAlert();
    } else {
      setIsLoadingLogin(true);
      if (authFake.email === email && authFake.password === password) {
        function login() {
          setIsLoadingLogin(false);
          navigate("/home");
        }
        
        setTimeout(login, timeout)
      } else {
        setIsLoadingLogin(false);
        toastPasswordOrEmailWrong();
      }
    }
  }

  function validateFormHandle() {}

  return (
    <>
      <Logo logoUrl={logoImg} />
      <div className="loginPage-animation">
        <div className="title-login">
          <h2>Bem-vindo de volta</h2>
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
          <div className="form-login">
            <form action="" onSubmit={validateFormHandle}>
              <InputLogin
                inputType="email"
                label="E-mail"
                placeholder="jonh.doe@example.com"
                onChange={event => setUserEmail(event.target.value)}
                icon={<EnvelopeSimple size={24} color="#9CA3AF" stroke="10" />}
              />
              <InputLogin
                inputType="password"
                label="Senha"
                placeholder="*********"
                onChange={event => setUserPassword(event.target.value)}
                icon={<Key size={24} color="#9CA3AF" stroke="10" />}
              />

              <div
                className={`login-enter-button ${
                  enableLogin ? "login-button-enable" : "login-button-disable"
                }`}
              >
                <Button
                  text={
                    isLoadingLogin ? (
                      <CircleNotch className="login-spin-button" size={24} />
                    ) : (
                      "Entrar"
                    )
                  }
                  onClick={event => loginFormHandle(event)}
                  disabled={!enableLogin}
                />
              </div>
            </form>
          </div>

          <div className="link-footer">
            <Link to="/register">
              <p>Não possui conta? crie uma agora</p>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
