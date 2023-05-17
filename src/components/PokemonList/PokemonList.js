import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [data, setData] = useState({ results: [] });
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=50');
      setData(result.data);
    };

    fetchData();
  }, []);

  const filteredPokemon = data.results.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <li>
          <div>
            <SearchBar value={search} onChange={setSearch} />
            <div >
              {filteredPokemon.map(pokemon => (
                  <PokemonCard key={pokemon.name} url={pokemon.url} />
              ))}
            </div>
          </div>
      </li>
  );
}

export default PokemonList;
