import logo from "/logo-2x.svg";
import "./Landingpage.css";
import { Button } from "./components/Button/Button";
import { ArrowArcRight, ArrowRight } from "phosphor-react";

export function LandingPage() {
  return (
    <>
    <div className="logo">
    <img src={logo} className="logo" alt="dev.finance" />
    </div>
    <main>
      <div className="content">
        <h1>Gerencie sua vida finaceira de forma fácil e simples.</h1>
        <p>Com a dev.finance você terá controle completo da sua vida finaceira <br /> de forma fácil e rapida.</p>
      </div>

      <div className="buttons">
        <div className="create-account">
        <Button content="Começe agora" href="#" />
        </div>

        <div className="login">
        <Button content="Entre com a sua conta" href="#" />
        <ArrowRight size={24} />
        </div>
      </div>
    </main>
    </>
  );
}
