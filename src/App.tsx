import './App.css';
import ItemsGrid from './components/ItemsGrid/ItemsGrid';
import { IMAGES } from './images';

const App: React.FC = () => {
  return (
    <div className="App">
      <ItemsGrid data={IMAGES} />
    </div>
  );
}

export default App;
