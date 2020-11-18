import React, { Props } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";

import { Container } from './styles';

interface PokemonProps {
  name:string;
  url:string;
}

const Card: React.FC<PokemonProps> = (props) => {
  const hystory = useHistory();

  function handleClick(s: String){
    hystory.push(`/detail/${s}`);
  }

  return (

    <Container onClick={()=>handleClick(props.name)}>
      <p>{props.name}</p>
    </Container>
  )
}

 export default Card;
