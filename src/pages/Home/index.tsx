import React from "react";

import { Container, ContentPage } from './styles';

import { usePokemon } from '../../contexts/pokemon';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
// import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Navegation from "../../components/Navegation";

const Home: React.FC = () => {
  const { pokemon } = usePokemon();
  
  return (
    <Container>
      <Header />
        <Menu />
        <ContentPage>
          <section>
            {pokemon.map(pokes => (
              <Card key={pokes.name} url={pokes.url} name={pokes.name}/>
            ))}
          {pokemon.length > 1 || pokemon.length >= 7 ? <Navegation /> : ''}
          </section>
        </ContentPage>
    </Container>
  );
}

export default Home;