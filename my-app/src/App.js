import './App.css';
import Condicional from './components/Condicional';
import Lista from './components/Lista';

function App() {
  
  const meusItens = ["React", "Vue", "Angular"]

  return (
    <div className="App">
      <h1>Renderização condicional</h1>
      <Condicional/>
      <Lista itens={meusItens}/>
      <Lista itens={[]}/>
    </div>
  );
}

export default App;