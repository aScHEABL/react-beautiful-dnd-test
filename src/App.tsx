import React from 'react';
import List from './pages/ListPage';
import { MantineProvider } from '@mantine/core';
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <MantineProvider theme={{ 
        // fontFamily: 'Open Sans',
        colorScheme: 'dark',
        }} withGlobalStyles withNormalizeCSS>
          <List />
      </MantineProvider>
    </AppContextProvider>
  );
}

export default App;
