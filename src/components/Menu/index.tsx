import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';
import { usePokemon } from '../../contexts/pokemon';


const Menu: React.FC = () => {
  const [name, setSearchName] = useState("");
  const [type, setSearchType] = useState("");
  const { setPokemon } = usePokemon();

  function searchName () {
    if(name!== ""){
      api
      .get(`pokemon/${name}`)
        .then((response) => {
            let vectorContent = [
              response.data.species
            ]
            setPokemon(vectorContent)
        })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });

      setSearchName("")
    } 
  }
  function searchType () {
    if(type!== ""){
      api
      .get(`type/${type}`)
        .then((response) => {

          let vectorContent = []
          for (let i = 0; i < response.data.pokemon.length; i++) {
            vectorContent.push(response.data.pokemon[i].pokemon)
          }

          setPokemon(vectorContent)
        })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });

    setSearchType("")
    } 
  }

  return (
    <Container>
      <section className="nameSearch">
        <input
          placeholder="Name"
          type="text" 
          onChange={(e) => setSearchName(e.target.value)}
          value={name}
        />
        <button type="button" onClick={searchName}>Search</button>
      </section>
      <section className="typeSearch">
        <input
          placeholder="Type"
          type="text" 
          onChange={(e) => setSearchType(e.target.value)}
          value={type}
        />
        <button type="button" onClick={searchType}>Search</button>
      </section>
    </Container>
  )
}

export default Menu;