import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setPokemon(result.data);
        };
        fetchData();
    }, [url]);

    if (!pokemon) return null;

    return (
        <div className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    );


}

export default PokemonCard;
