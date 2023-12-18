import '../style/Gallery.scss';
import kasa from '../asset/kasa.json';
import { Link } from "react-router-dom";


let res = kasa;//json
//console.table(res);

function Gallery() {
  return (
    <div className="App">
      <header className="App-header">
      {res.map((tab) => (
        <Link to={"/flat/"+tab.id} key={ tab.id }>
          <p>{tab.title}</p>
        </Link>
      ))}
      </header>
    </div>
  );
}

export default Gallery;
