import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const name = 'Willi'

  return (
    <div className="App">
      <SayMyName nome={name}/>
      <Pessoa nome={name} idade="20" profissao="Engenheiro de Software" foto="https://via.placeholder.com/150"/>
      <Frase/>
      <List/>
      <Evento numero={1}/>
      <Form/>
    </div>
  );
}

export default App;