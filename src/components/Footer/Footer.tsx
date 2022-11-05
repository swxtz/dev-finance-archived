import "./styles.css"

interface FooterProps {
  content: string;
  href?: string;
  hrefContent?: string;
}

export function Footer(props: FooterProps) {
  return (
    <footer>
      <p>{props.content} <a href={props.href}>{props.hrefContent}</a></p>
    </footer>
  )
}