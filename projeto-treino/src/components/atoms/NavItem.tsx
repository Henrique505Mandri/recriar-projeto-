import './atoms.css';

interface NavItemProps {
  text: string;
  to: string;
}

function NavItem(props: NavItemProps) {
  const { text, to } = props;

  return (
    <a className="nav-item" href={to}>
      {text}
    </a>
  );
}

export default NavItem;
