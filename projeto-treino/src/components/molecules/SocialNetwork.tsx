import './molecules.css';
import SocialLink from '@/components/atoms/SocialLink';
import git from '@/assets/images/icons/github.svg';
import twi from '@/assets/images/icons/twitter.svg';
import fac from '@/assets/images/icons/facebook.svg';

function SocialNetwork() {
  return (
    <div className="social-networks">
      <SocialLink
        icon={git}
        name="Github"
        to="https://github.com/Henrique505Mandri"
      />
      <SocialLink icon={twi} name="Twitter" to="https://github.com/tedu14" />
      <SocialLink icon={fac} name="Facebook" to="https://github.com/tedu14" />
    </div>
  );
}
export default SocialNetwork;
