import './App.css';
import ItemsGrid from './components/ItemsGrid/ItemsGrid';
import { IMAGES } from './images';

function App() {
  return (
    <div className="App">
      <ItemsGrid data={IMAGES} />
    </div>
  );
}

export default App;
