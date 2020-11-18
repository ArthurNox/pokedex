import React from 'react';

import { PokemonProvider } from './pokemon';


export const AppProvider = ({children}: any) => {
  return (
      <PokemonProvider>{children}</PokemonProvider>
  );
};
