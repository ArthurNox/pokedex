import React, { createContext, useContext, useState, useMemo, useEffect, Children } from "react";
import PropTypes from "prop-types";

import api from '../../services/api';

const PokemonContext = createContext({});

export const PokemonProvider = ({}) => {
  const [pokemon, setPokemon] = useState([]);
  const [nav, setNav] = useState<number>(0);

  useEffect(() => {
    api
      .get(`/pokemon/?offset=${nav}&limit=7`)
        .then((response) => {
          let list = response.data.results
          setPokemon(list)
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
      {Children}
    </PokemonContext.Provider>
  )
};

// export const usePokemon = () => {
//   const context = useContext(PokemonContext);

//   if (!context)
//     throw new Error("usePokemon must be used within a PokemonContext.");

//   const { pokemon, setPokemon, nav, useNav } = context;

//   return {
//     pokemon, 
//     setPokemon,
//     nav,
//     useNav,
//   };
// };

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};