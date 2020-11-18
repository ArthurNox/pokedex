import React, { useState, useEffect } from "react";
import { useHistory, useParams  } from "react-router-dom";

import api from '../../services/api';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { TopSection, ContentSection } from '../../styles/global.style';
import { Container } from './style';

interface IDetail {
  image: string;
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

          setDetailPokemon(prevState => {
            return{
              ...prevState,
              image: response.data.sprites.other['official-artwork'].front_default,
              type:response.data.types[0].type.name,
              weight: response.data.weight,
            }
          })
        
          console.log(detailPokemon)
          // setImg(response.data.sprites.other['official-artwork'].front_default)
          // setName(response.data.name)
          // console.log(response.data.types.type.name)
          // let list = response.data.results

          // setImg()
          // setDetailPokemon()

         
          
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
      <TopSection >
          <Header />
        </TopSection>
        <ContentSection>
          <Menu />
          <Container>
            <section>
              <img src={detailPokemon?.image}></img>
              <h1>{name}</h1>
              <p>Type: {detailPokemon?.type}</p>
              <p>Weight: {detailPokemon?.weight}</p>
              <button type="button" onClick={() => handleBack()}>Back</button>
            </section>
          </Container>
        </ContentSection>
    </>

  );
}

export default Detail;