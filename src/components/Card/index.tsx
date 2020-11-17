import React from 'react';

import { Container } from './styles';

interface PokemonProps {
  name:string;
  url:string;
}

const Card: React.FC<PokemonProps> = (props) => {
  return (
    <Container>
      <p>{props.name}</p>
    </Container>
  )
}

 export default Card;
