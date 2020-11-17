import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

import { TopSection, ContentSection } from '../../styles/global.style';
// import { Card } from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Card from '../../components/Card';

interface IPokemon {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [nav, SetNav] = useState<number>(0);

  function navigation (n: number) {
    if( n === 7){
      SetNav(nav + 7)
    } else if ( n === -7 && nav > 0){
      SetNav(nav - 7)
    }
  }

  useEffect(() => {
    api
      .get(`/pokemon/?offset=${nav}&limit=7`)
        .then((response) => {
          let list = response.data.results
          setPokemon(list)
          // for (const item of list) {
          //   api.get(item.url)
          //     .then((res) =>{
          //       console.log('unidade', res.data.id)
              
          //     let unit = response.data
          //      setPokemon([...pokemon, {unit.id}])
          //   })       
          // }
        })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });
  }, [nav]);

  return (
    <>
      <TopSection >
        <Header />
      </TopSection>
      <ContentSection>
        <Menu />
        <section>
          {pokemon.map(pokes => (
            <Card key={pokes.name} url={pokes.url} name={pokes.name}/>
          ))}
          <div>
            <button type="button" onClick={()=>navigation(-7)}>Previos</button>
            <button type="button" onClick={()=>navigation(7)}>Next</button>
          </div>
        </section>
      </ContentSection>
    </>

  );
}

export default Home;