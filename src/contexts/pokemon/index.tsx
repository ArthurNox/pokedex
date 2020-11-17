import React, { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

import api from '../../services/api';

const PokemonContext = createContext({});

export const PokemonProvider = ({}) => {
  const [pokemon, setPokemon] = useState([]);

  async function getPokemon() {
    try {
      const response = await api.get('pokemon/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

}