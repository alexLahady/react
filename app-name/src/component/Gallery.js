import '../style/Gallery.scss';
import kasa from '../asset/kasa.json';
import { NavLink } from "react-router-dom";


let res = kasa;//json
//console.table(res);

function Gallery() {
  return (
    <div className="App">
      <header className="App-header">
      {res.map((tab) => (
        <NavLink to={"/flat/"+tab.id} key={ tab.id }>
          <p>{tab.title}</p>
        </NavLink>
      ))}
      </header>
    </div>
  );
}

export default Gallery;
