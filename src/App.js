import React from 'react';
import { GlobalStyle } from  './style';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';
import {Provider} from 'react-redux';
import store from './store/index';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle>开始</GlobalStyle>
        { renderRoutes (routes) }
      </HashRouter>
    </Provider>
     
  );
}

export default App;
