import React from 'react';
import { GlobalStyle } from  './style';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';
function App() {
  return (
      <HashRouter>
        <GlobalStyle>开始</GlobalStyle>
        { renderRoutes (routes) }
      </HashRouter>
  
  );
}

export default App;
