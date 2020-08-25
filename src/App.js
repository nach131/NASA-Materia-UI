import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import RenderApi from './components/test/RenderApi'



// import Cards from './components/Cards'
import './styles.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0e1525'
    },
    secondary: {
      main: '#c93838'
    },
  },
  status: {
    danger: 'orange',
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Intro />
    <RenderApi/>

      {/* <Cards /> */}


    </ThemeProvider>
  );
}

export default App;
