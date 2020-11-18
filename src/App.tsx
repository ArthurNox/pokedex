import React from 'react';

import Routes from './routes'
import GlobalStyle from "./styles/global.style";
import { AppProvider } from "./contexts";

function App() {
  return (
      <AppProvider>
        <Routes />
        <GlobalStyle />     
      </AppProvider>
  );
}

export default App;
