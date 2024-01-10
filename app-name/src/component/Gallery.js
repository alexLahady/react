import '../style/Gallery.scss';
import kasa from '../asset/kasa.json';
import { Link } from "react-router-dom";

//Fonction Gallery qui permet d'afficher tous les cubes avec le titre et l'id en fonction des informations données

function Gallery() {
  return (
    <div className="App">
      <div className="App-header">
      {kasa.map((tab) => (
        <Link to={"/flat/"+tab.id} key={ tab.id }>
          <p>{tab.title}</p>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Gallery;
