import { CircleNotch, EnvelopeSimple, Key } from "phosphor-react";
import { FormEvent, useEffect, useState, useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Button } from "../../components/Button/Button";
import { InputLogin } from "../../components/InputLogin/InputLogin";
import { Logo } from "../../components/Logo/Logo";
import "./LoginPage.css";
import logoImg from "/logo-2x.svg";
import "react-toastify/dist/ReactToastify.css";
import {
  toastEmailErrorAlert,
  toastEmailOrPasswordWrong,
  toastPasswordNotValidErrorAlert,
  toastPasswordOrEmailWrong,
  toastThisUserDoesNotExist
} from "../../errors/toastify";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../libs/axiox";
import { AuthContext } from "../../contexts/Auth";
import { AuthInterfaceProps } from "../../types/AuthTypes";

export function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [enableLogin, setEnableLogin] = useState(true);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const { authenticated, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const pageTitle: string = "Dev.Finance | Login";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  function loginFormHandle(event: FormEvent) {
    event.preventDefault();
    const timeout: number = 1500;

    if (userEmail.trim() === "" || userPassword.trim()=== "") {
      toastEmailOrPasswordWrong();
      return
    }
    
    setIsLoadingLogin(true);
    api.post("/user/login", { email: userEmail, password: userPassword }).then(data => {
        console.log(data.data.token)
    })

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
