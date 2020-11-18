import React from "react";

import { TopSection, ContentSection } from '../../styles/global.style';
import { Container } from './styles';

import { usePokemon } from '../../contexts/pokemon';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import Navegation from "../../components/Navegation";

const Home: React.FC = () => {
  const { pokemon } = usePokemon();
  
  if(pokemon.length > 1){
    const navButtton = true;
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
            {pokemon.map(pokes => (
              <Card key={pokes.name} url={pokes.url} name={pokes.name}/>
            ))}
          {pokemon.length > 1 ? <Navegation /> : ''}
          </section>
        </Container>
      </ContentSection>
    </>

  );
}

export default Home;