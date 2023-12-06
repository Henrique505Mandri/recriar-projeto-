import './atoms.css';
import logo from '@/assets/images/Henrique.png';

function Logo() {
  return (
    <div>
      <img src={logo} alt="Logotipo marcos" className="logo" />
    </div>
  );
}
export default Logo;
