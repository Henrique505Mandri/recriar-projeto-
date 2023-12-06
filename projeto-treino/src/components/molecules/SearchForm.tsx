import './molecules.css';
import icon from '@/assets/images/icons/search.svg';

function Searchform() {
  return (
    <form className="search-form">
      <input type="text" placeholder="Buscar" />
      <button>
        <img src={icon} alt="Ícone de pesquisa" />
      </button>
    </form>
  );
}
export default Searchform;
