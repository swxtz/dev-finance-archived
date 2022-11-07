import "./styles.css";

interface TransacionTableProps {
  description: string;
  value?: number;
  valueTitle?: string;
  date: string;
  exemple?: boolean;
  isNegative?: boolean;
}

export function TransactionTable({ description, value, valueTitle, date, exemple = false, isNegative = false }: TransacionTableProps){
  return (
    <div className={`table-row ${exemple ? `table-example` : ``}`}>
      <span className="table-desc">{description}</span>
      <span className={`${isNegative ? `table-red` : `table-green`}`}>{!exemple? `${isNegative ? `- R$ ${value}` : `R$ ${value}`}` : `${valueTitle}`}</span>
      <span className="table-date">{date}</span>
    </div>
  )
}
