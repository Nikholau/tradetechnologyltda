import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './style/global';
import AppRoutes from './routes/Routes';
import { UserProvider } from './hooks/UserContext';

const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <GlobalStyle />
      </UserProvider>
    </>
  );
};

export default App;
