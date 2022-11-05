import logo from "/logo-2x.svg";
import "./Landingpage.css";
import { Button } from "../../components/Button/Button";
import { ArrowRight } from "phosphor-react";
import { Footer } from "../../components/Footer/Footer";
import { Logo } from "../../components/Logo/Logo";

export function LandingPage() {
  return (
    <>
    <div className="logo">
    <Logo logoUrl={logo} />
    </div>
    <main>
      <div className="content">
        <h1>Gerencie sua vida finaceira de forma fácil e simples.</h1>
        <p>Com a dev.finance você terá controle completo da sua vida finaceira <br /> de forma fácil e rapida.</p>
      </div>

      <div className="buttons">
        <div className="create-account">
        <Button content="Começe agora" href="/register" />
        </div>

        <div className="login">
        <Button content="Entre com a sua conta" href="#" />
        <ArrowRight size={24} color="#E5E7EB"/>
        </div>
      </div>

      <div className="footer">
      <Footer content="Feito com ❤️ " href="https://github.com/swxtz" hrefContent="Gustavo Mendonca"/>
      </div>
    </main>
    </>
  );
}
