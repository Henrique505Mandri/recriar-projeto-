import Container from '@/components/bosons/Container.tsx';
import Header from '@/components/organisms/Header';
import Presentation from '@/components/organisms/Presentation';
import Services from '@/components/organisms/Services';
import './Home.css';

function Home() {
  return (
    <div className="home-template">
      <Container>
        <Header />
        <Presentation />
        <Services />
      </Container>
    </div>
  );
}
export default Home;
