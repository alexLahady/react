import '../style/App.css';
import kasa from '../asset/kasa.json';

let res = kasa;//json
//console.table(res);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {res.map((tab) => (
        <div key={ tab.id }>
          <p>{tab.title}</p>
        </div>
      ))}
      </header>
    </div>
  );
}

export default App;
