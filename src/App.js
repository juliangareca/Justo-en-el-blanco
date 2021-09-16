import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Carrousel from './components/Carrousel/Carrousel.js';
import ItemListContainer from './components/ItemList';
import Card from './components/Cards/Card';
// import { render } from 'react-dom';
// import { useState } from 'react';



const App = ()  => {
  return (


    <div className="App">
    
      <header >

        <NavBar/>

      </header>

      <div className="App-header">

        <ItemListContainer greetings="¡Bienvenidos a Justo en el Blanco!"/>

        <Carrousel/>
        <Card/>

      </div>
    </div>

  );
}

export default App;
