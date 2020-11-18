import React from 'react';

import { Button } from './styles';
import { usePokemon } from '../../contexts/pokemon';

const Navegation: React.FC = () => {
  const { nav, setNav } = usePokemon();

  function navigation (n: number) {
    if( n === 5){
      setNav(nav + 5)
    } else if ( n === -5 && nav > 0){
      setNav(nav - 5)
    }
  }

  return (
    <div>
      <Button type="button" onClick={()=>navigation(-5)}>Previos</Button>
      <Button type="button" onClick={()=>navigation(5)}>Next</Button>
    </div>
  );
}

export default Navegation;