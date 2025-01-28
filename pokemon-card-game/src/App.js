import { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SingleCard } from './SingleCard/SingleCard';
import { NavBar } from './NavBar/NavBar';
import Alert from 'react-bootstrap/Alert';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isDeck, setIsDeck] = useState(false);
  const [deckList, setDeckList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const myHeaders = new Headers();
  myHeaders.append('sessiontoken', 'test');
  myHeaders.append('Content-Type', 'application/json');

  // Fetch All Pokemon function
  async function fetchPokemon(){
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151',
        {
          headers: myHeaders,
          method: 'GET',
          mode: 'cors'
        }
      );
      const itemData = await response.json();
      setPokemonList(itemData.results)
    }
    catch(err){
      console.log("ERROR:", err);
    }
  }

  useEffect(()=>{
    fetchPokemon();
  }, []);

  // Functions
  const handleViewDeck = () =>{
    setIsDeck(true);
  }

  const handleViewList = () =>{
    setIsDeck(false);
  }

  const handleAdd = (name, url) => {
    if(deckList.length < 5){
      setDeckList([...deckList, {'id': crypto.randomUUID(),'name': name, 'url': url}]);
    }
    else{
      setShowAlert(true);
    }
  }
  

  const handleRemove = (id) =>{
    setShowAlert(false);
    const newDeck = deckList.filter(item=>item.id !== id)
    setDeckList(newDeck);
  }
  return (
    <>
      <div className='App'>
        {showAlert && (
          <Alert variant='danger' dismissible onClose={()=>setShowAlert(false)}> Deck limit reached! </Alert>
        )}
        <NavBar handleViewDeck={handleViewDeck} handleViewList={handleViewList} />
        <div className='cards'> 
          {isDeck && (
            <>
              {deckList.length !== 0 && deckList.map((item)=>(
                <>
                  <SingleCard name={item.name} url={item.url} id={item.id} handleRemove={handleRemove} isDeck={isDeck} key={item.id}/>
                </>
              ))}
              {deckList.length === 0 && (
                <div> Deck is empty! Add Pokemon to view them here </div>
              )}
            </>
          )}
          {!isDeck && (
            <>
              {pokemonList.map( (item, index) => (
                <>
                  <SingleCard name={item.name} url={item.url} handleAdd={handleAdd} isDeck={isDeck} key={index}/>
                </>
              ))}
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default App;
