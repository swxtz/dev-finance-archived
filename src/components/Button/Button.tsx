import "./styles.css";


interface ButtonProps {
  content: string;
  href: string;
  icon?: string;
}


export function Button(props: ButtonProps) {
  return (
    <div>
    <a href={props.href} className="button">
      {props.content}
    </a>
    {props.icon} 
    </div>
  );
}