import './atoms.css';

interface SocialLinkProps {
  name: string;
  icon: string;
  to: string;
}

function SocialLink(props: SocialLinkProps) {
  const { name, to } = props;

  return (
    <a className="nav-item" href={to}>
      {name}
    </a>
  );
}

export default SocialLink;
