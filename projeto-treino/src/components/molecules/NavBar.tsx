import './molecules.css';
import NavItem from '@/components/atoms/NavItem';

function NavBar() {
  return (
    <nav className="nav-bar">
      <NavItem text="Serviços" to="/" />
      <NavItem text="Sobre mim" to="/" />
      <NavItem text="Cases" to="/" />
      <NavItem text="Contato" to="/" />
    </nav>
  );
}
export default NavBar;
