import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';
import { usePokemon } from '../../contexts/pokemon';


const Menu: React.FC = () => {
  const [name, setSearchName] = useState("");
  const [type, setSearchType] = useState("");
  const { setPokemon } = usePokemon();

  interface Colletc {
    pokemon: Array<Monster>;
    slot: string;
  }
  interface Monster {
    name: string;
    url: string;
  }

  function searchName () {
    if(name!== ""){
      api
      .get(`pokemon/${name}`)
        .then((response) => {
            let vectorContent = [
              response.data.species
            ]
            console.log(vectorContent)
            setPokemon(vectorContent)
        })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });

      setSearchName("")
    } 
  }
  //TODO Tratar o response dos tipos
  function searchType () {
    if(type!== ""){
      api
      .get<Colletc>(`type/${type}`)
        .then((response) => {
          //  var content:Colletc = response.data.pokemon
          //  let vectorContent = []

           
          //  console.log(response.data.pokemon)

          // for (let a of response.data.pokemon){
          //     console.log(vectorContent)
          //     vectorContent.push({...{}})
          //   }
          // for (let a of response.data.pokemon ){
          //   console.log(a.name)
          // }
          // console.log(response.data.pokemon.pokemon)

          // for (let i = 0; i < response.data.pokemon.length; i++) {
          //     console.log(response.data.pokemon[i])
          //     for (let j = 0; j < response.data.pokemon[i].length; j++) {
          //       vectorContent.push = response.data.pokemon[j];
                
          //     } 
          // }
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