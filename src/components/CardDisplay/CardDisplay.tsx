import "./styles.css"
interface CardDisplayProps {
  icon: string;
  title: string;
  value: number;
  alt?: string;
  isTotalCard?: boolean;
}

export function CardDisplay({icon, title, value, alt, isTotalCard = false}: CardDisplayProps) {
  return (
    <div className={`card-display ${isTotalCard? `card-green`:``}`}>
      <div className="card-wrapper">
        <div className="card-header">
          <span>{title}</span>
          <img src={icon} alt={alt} />
        </div>

        <div className="card-value">
          <span className="card-dollar">R$ </span><span>{value}</span>
        </div>
      </div>
    </div>
  )
}