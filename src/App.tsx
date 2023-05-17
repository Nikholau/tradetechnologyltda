import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './style/global';
import AppRoutes from './routes/Routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
