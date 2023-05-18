import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../pages/Login';
import Countries from '../pages/Countries';
import Seasons from '../pages/Seasons';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/seasons" element={<Seasons />} />
    </Routes>
  );
};

export default AppRoutes;
