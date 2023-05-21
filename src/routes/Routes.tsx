import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../pages/Login';
import Countries from '../pages/Countries';
import Seasons from '../pages/Seasons';
import Leagues from '../pages/Leagues';
import Teams from '../pages/Teams';
import InfoTeam from '../pages/InfoTeam';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/seasons" element={<Seasons />} />
      <Route path="/leagues" element={<Leagues />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/infoteam" element={<InfoTeam />} />
    </Routes>
  );
};

export default AppRoutes;
