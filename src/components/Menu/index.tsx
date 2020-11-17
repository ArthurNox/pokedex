import React, { useState } from 'react';

import { Container } from './styles';


const Menu: React.FC = () => {
  const [search, setSearch] = useState("");

  function handleSearch () {
    alert(search)

    setSearch("")
  }

  return (
    <Container>
      <input
        placeholder="Name"
        type="text" 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="button" onClick={handleSearch}>Search</button>

    </Container>
  )
}

export default Menu;