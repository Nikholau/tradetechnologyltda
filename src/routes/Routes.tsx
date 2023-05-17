import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../pages/Login';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
    </Routes>
  );
};

export default AppRoutes;
