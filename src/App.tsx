import React from 'react';
import List from './pages/ListPage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider theme={{ 
      // fontFamily: 'Open Sans',
      colorScheme: 'dark',
       }} withGlobalStyles withNormalizeCSS>
        <List />
    </MantineProvider>
  );
}

export default App;
