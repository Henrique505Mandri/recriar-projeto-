import './organisms.css';
import SocialNetwork from '@/components/molecules/SocialNetwork';
import pre from '@/assets/images/presentation.svg';

function Presentation() {
  return (
    <div className="presentation">
      <SocialNetwork />
      <img className="presentation" src={pre} alt="Apresentação" />
    </div>
  );
}
export default Presentation;
