import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Willi'
  const url = 'https://via.placeholder.com/150'


  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Olá, {name}</p>
      <img src={url} alt="Imagem de teste"></img>
      <HelloWorld/>
    </div>
  );
}

export default App;