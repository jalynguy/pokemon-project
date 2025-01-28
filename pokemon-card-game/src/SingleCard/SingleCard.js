import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SingleCard.css';
export const SingleCard = (props) => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImage , setPokemonImage] = useState('https://i.sstatic.net/xeqSS.jpg');
    const [pokemonStats, setPokemonStats] = useState('');

    function capitalizeFirstLetter(string) {
        const newName = string.charAt(0).toUpperCase() + string.slice(1);
        setPokemonName(newName);
;    }
    async function getPokemonInfo(){
        try{
            const response = await fetch(props.url);
            const result = await response.json();
            setPokemonImage(result.sprites.other["official-artwork"].front_default)
            setPokemonStats({
                type: result.types[0].type.name,
                weight: result.weight
            })
        }
        catch(err){
            console.error('ERROR:', err)
        }
    }

    useEffect(()=>{
        capitalizeFirstLetter(props.name);
        getPokemonInfo();
    }, [])
    return (
        <>
            <Card className='card-container'>
                <Card.Img variant='top' src={pokemonImage} alt='Pokemon Image'/> 
                <Card.Body className='info'>
                    <Card.Title> {pokemonName} </Card.Title>
                    <Card.Text className='stats'> 
                         Type: {pokemonStats.type}
                         <br/>
                         Weight: {pokemonStats.weight}
                    </Card.Text>
                    {props.isDeck === true && (
                        <Button variant='danger' onClick={()=>props.handleRemove(props.id)}> Remove From Deck </Button>
                    )}
                    {props.isDeck === false && (
                        <Button variant='primary' onClick={()=>props.handleAdd(props.name, props.url)}> Add to Deck </Button>
                    )}
                </Card.Body>
            </Card>
        </>
    )
}