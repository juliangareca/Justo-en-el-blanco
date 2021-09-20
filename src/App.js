import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Carrousel from './components/Carrousel/Carrousel.js';
import ItemListContainer from './components/ItemListContainer';
// import { render } from 'react-dom';
// import { useState } from 'react';



const App = ()  => {
  return (


    <div className="App">
    
      <header >

        <NavBar/>

      </header>

      <div className="App-header">


        <Carrousel/>
        <ItemListContainer />
      </div>
    </div>

  );
}



export default App;
