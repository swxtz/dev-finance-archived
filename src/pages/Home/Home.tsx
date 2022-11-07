import "./Home.css";
import { Logo } from "../../components/Logo/Logo";
import { useEffect } from "react";
import { CardDisplay } from "../../components/CardDisplay/CardDisplay";

import logoImg from "../../assets/svg/logo-main-1x.svg";
import incomeLogo from "../../assets/svg/incomes.svg";
import expensesLogo from "../../assets/svg/expenses.svg";
import dollarLogo from "../../assets/svg/dollar.svg";
import { Button } from "../../components/Button/Button";
import { TransactionTable } from "../../components/TransactionTable/TransactionTable";

export function Home() {
  const pageTitle: string = "Dev.Finance | Pagina inicial";
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <>
      <div className="home-wrapper">
        <div className="logo">
          <Logo logoUrl={logoImg} alter="Logo Dev.Finance" />
        </div>

        <div className="cards-display">
          <CardDisplay
            icon={incomeLogo}
            title="Entradas"
            value={123123.33}
            alt="Entradas"
          />
          <CardDisplay
            icon={expensesLogo}
            title="Saídas"
            value={123123.33}
            alt="Saídas"
          />
          <CardDisplay
            icon={dollarLogo}
            isTotalCard={true}
            title="Entradas"
            value={123123.33}
            alt="Total"
          />
        </div>

        <div className="transactions">
          <div className="new-transaction">
            <Button text="+ Nova transação" />
          </div>
          <div className="transactions-rows">
            <TransactionTable description="Descrição" valueTitle="Valor" date="Data" exemple={true} />
            <TransactionTable description="Dinheiro upi!!!!" value={1233.3} date="10/04/2020" isNegative={false}  />
          </div>
        </div>
      </div>
    </>
  );
}
