import { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SingleCard } from './SingleCard/SingleCard';
import { NavBar } from './NavBar/NavBar';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isDeck, setIsDeck] = useState(false);

  async function fetchPokemon(){
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const itemData = await response.json();
      setPokemonList(itemData.results)
    }
    catch(err){
      console.log("ERROR:", err);
    }
  }

  useEffect(()=>{
    fetchPokemon();
  }, [])
  return (
    <>
      <div className='App'>
        <NavBar/>
        <div className='cards'> 
          {pokemonList.map( (item) => (
            <>
              <SingleCard name={item.name} url={item.url}/>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
