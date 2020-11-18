import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation,  } from "react-router-dom";
import axios from 'axios';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { TopSection, ContentSection } from '../../styles/global.style';

interface IDetail {
  imagem: string;
  id: number;
  name: string;
  type: string;
  weight: number;
}

interface DetailProps {
  url: string;
}

const Detail: React.FC<DetailProps> = (props) => {
  const [ detailPokemon, setDetailPokemon ] = useState<IDetail>();
  const [ name, setName] = useState('');
  const [ img, setImg ] = useState('');
  const [ type, setType ] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const state = location.state;

  useEffect(() => {
    axios
      .get(`${state}`)
        .then((response) => {

          
          setImg(response.data.sprites.other['official-artwork'].front_default)
          setName(response.data.name)
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
          <section>
            <button type="button" onClick={() => handleBack()}></button>
            <img src={img}></img>
            <h1>{name}</h1>
          </section>
        </ContentSection>
    </>

  );
}

export default Detail;