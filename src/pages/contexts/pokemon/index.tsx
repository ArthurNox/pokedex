import React, { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

import api from '../../../services/api';

const DragonsContext = createContext({});


export const DragonsProvider = ({  }) => {
  const [dragons, setDragons] = useState([]);

  const getDragons = useMemo(() => {
    fetch("https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon")
      .then((res) => res.json())
      .then((json) => {
        setDragons((json));
      });
  }, []);

  return (
    <DragonsContext.Provider
      value={{
        dragons,
        setDragons,
      }}
    >
      {}
    </DragonsContext.Provider>
  );
};

const pokemon: React.FC = () => {
  return <div />;
}

export default pokemon;