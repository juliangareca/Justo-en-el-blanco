import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Carrousel from './components/Carrousel/Carrousel.js';
import ItemListContainer from './components/ItemList';

const App = ()  => {
  return (

    

    <div className="App">
    
      <header >

        <NavBar/>

      </header>

      <div className="App-header">

        <ItemListContainer greetings="¡Bienvenidos a Justo en el Blanco!"/>

        <Carrousel/>

      </div>
    </div>

  );
}

export default App;
