import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';
import { usePokemon } from '../../contexts/pokemon';

const Footer: React.FC = () => {
  const [search, setSearch] = useState("");
  const { setPokemon } = usePokemon();

  //TODO tratar pesquisa vazia
  function handleSearch () {
    if(search!== ""){
      api
      .get(`pokemon/${search}`)
        .then((response) => {
            let vectorContent = [
              response.data.species
            ]
            setPokemon(vectorContent)
        })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });

    setSearch("")
    } 
  }

  return (
    <Container>
      <Container>
      <input
        placeholder="Pokémon Type"
        type="text" 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="button" onClick={handleSearch}>Search</button>
    </Container>
    </Container>
  );
}

export default Footer;