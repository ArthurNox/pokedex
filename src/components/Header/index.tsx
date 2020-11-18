import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <a href='/home'>
        <h1>Pokédex</h1>
      </a>  
    </Container>
  );
}

export default Header;