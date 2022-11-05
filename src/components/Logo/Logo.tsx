
interface LogoProps {
  logoUrl: string;
  alter?: string;
}

export function Logo(props: LogoProps) {
  return (
    <div className="logo">
    <img  src={props.logoUrl} alt={props.alter} />
    </div>
  )
}