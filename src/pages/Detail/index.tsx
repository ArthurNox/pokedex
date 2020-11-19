import React, { useState, useEffect } from "react";
import { useHistory, useParams  } from "react-router-dom";

import api from '../../services/api';
import Header from '../../components/Header';

import { Container } from './style';

interface IDetail {
  image: string;
  id: number;
  type: string;
  weight: number;
}
interface Params {
  name: string;
}

const Detail: React.FC = (props) => {
  const { name } = useParams<Params>()
  const [ detailPokemon, setDetailPokemon ] = useState<IDetail>();

  const history = useHistory();

  useEffect(() => {
    api
      .get(`pokemon/${name}`)
        .then((response) => {

          let tipos = ''
          if(response.data.types.length > 1){
            tipos = response.data.types[0].type.name + "/" + response.data.types[1].type.name
          } else {
            tipos = response.data.types[0].type.name
          }

          setDetailPokemon(prevState => {
            return{
              ...prevState,
              id: response.data.id,
              image: response.data.sprites.other['official-artwork'].front_default,
              type:tipos,
              weight: response.data.weight,
            }
          })     
        })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });
  }, []);
  
  function handleBack(){
    history.goBack();
  }

  return (
    <>
      <Header />
      <Container>
        <section>
          <img src={detailPokemon?.image}></img>
          <p>ID: {detailPokemon?.id}</p>
          <h1>{name}</h1>
          <p>Type: {detailPokemon?.type}</p>
          <p>Weight: {detailPokemon?.weight}</p>
          <button type="button" onClick={() => handleBack()}>Back</button>
        </section>
      </Container> 
    </>

  );
}

export default Detail;