import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SingleCard.css';
export const SingleCard = (props) => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImage , setPokemonImage] = useState('');
    const [pokemonStats, setPokemonStats] = useState('');

    function capitalizeFirstLetter(string) {
        const newName = string.charAt(0).toUpperCase() + string.slice(1);
        setPokemonName(newName);
;    }
    async function getPokemonInfo(){
        try{
            const response = await fetch(props.url);
            const image = await response.json();
            setPokemonImage(image.sprites.other["official-artwork"].front_default)
            setPokemonStats({
                type: image.types[0].type.name
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
                    <Card.Text> Type: {pokemonStats.type} </Card.Text>
                    <Button variant='primary'> Add to Deck </Button>
                </Card.Body>
            </Card>
        </>
    )
}