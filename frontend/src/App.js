import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import Routes from './routes';

function App() {
//componente em formato de função
  
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    
    </BrowserRouter>
  );
}

export default App;