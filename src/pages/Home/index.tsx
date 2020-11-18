import React from "react";

import { TopSection, ContentSection } from '../../styles/global.style';

import { usePokemon } from '../../contexts/pokemon';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import Navigation from '../../components/Navegation';
import Navegation from "../../components/Navegation";

const Home: React.FC = () => {
  const { pokemon, nav, setNav } = usePokemon();

  console.log(pokemon.length)



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
          <Navegation />
        </section>
      </ContentSection>
    </>

  );
}

export default Home;