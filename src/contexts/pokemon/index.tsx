import React, { createContext, useContext, useState,  useEffect, Children } from "react";

import api from '../../services/api';

interface Monster {
  name: string;
  url: string;
}

interface PokemonContextType {
  pokemon: Array<Monster>;
  setPokemon: (value: any) => void;
  nav: number;
  setNav: (value: number) => void;

};

const PokemonContext = createContext<PokemonContextType | null>(null);

export const PokemonProvider = ({children}: any) => {
  const [pokemon, setPokemon] = useState<Monster[]>([]);
  const [nav, setNav] = useState<number>(0);

  useEffect(() => {
    api
      .get(`/pokemon/?offset=${nav}&limit=5`)
        .then((response) => {
          setPokemon(response.data.results)
        })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });
  }, [nav]);

  return (
    <PokemonContext.Provider
      value={{
        pokemon, 
        setPokemon,
        nav,
        setNav,
      }}
    >
    {children}
    </PokemonContext.Provider>
  )
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context)
    throw new Error("usePokemon must be used within a PokemonContext.");

  const { pokemon, setPokemon, nav, setNav } = context;

  return {
    pokemon, 
    setPokemon,
    nav,
    setNav,
  };
};