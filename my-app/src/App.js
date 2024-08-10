import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Willi'

  return (
    <div className="App">
      <SayMyName nome={name}/>
      <Pessoa nome={name} idade="20" profissao="Engenheiro de Software" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;