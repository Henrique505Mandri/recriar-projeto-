import Logo from '@/components/atoms/Logo';
import NavBar from '@/components/molecules/NavBar';
import Searchform from '@/components/molecules/SearchForm';
import './organisms.css';

function Header() {
  return (
    <header className="header">
      <Logo />
      <NavBar />
      <Searchform />
    </header>
  );
}
export default Header;
