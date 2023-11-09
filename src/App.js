import './App.css';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import NavBars from './Components/NavBars/NavBars';

function App() {
  return (
    <div className="App">
      <NavBars/>
      <ItemListContainer greeting="Bienvenidos a Delta Gamers"/>
    </div>
  );
}

export default App;
