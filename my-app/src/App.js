import './App.css';
import Condicional from './components/Condicional';

function App() {
  const name = 'Willi'

  return (
    <div className="App">
      <h1>Renderização condicional</h1>
      <Condicional/>
    </div>
  );
}

export default App;