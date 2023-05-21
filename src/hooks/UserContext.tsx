import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IOptionCountry } from '../pages/Countries';
import { ISeason } from '../pages/Seasons';
import { ILeague } from '../pages/Leagues';
import { ITeam } from '../pages/Teams';
import { IPlayer } from '../pages/InfoTeam/components/List';
import { IGoal } from '../pages/InfoTeam/components/Graphic';
import { IResultsData } from '../pages/InfoTeam/components/Table';

interface UserContextData {
  key: string;
  setKey: (user: string) => void;
  country: IOptionCountry;
  setCountry: (item: IOptionCountry) => void;
  season: ISeason;
  setSeason: (item: ISeason) => void;
  league: ILeague;
  setLeague: (item: ILeague) => void;
  team: ITeam;
  setTeam: (item: ITeam) => void;
  formation: string;
  setFormation: (item: string) => void;
  players: IPlayer[];
  setPlayers: (item: IPlayer[]) => void;
  goals: IGoal[];
  setGoals: (item: IGoal[]) => void;
  results: IResultsData;
  setResults: (item: IResultsData) => void;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [key, setKey] = useState('');
  const [country, setCountry] = useState({ label: '', value: '', flag: '' });
  const [season, setSeason] = useState<ISeason>({ label: '', value: '' });
  const [league, setLeague] = useState<ILeague>({
    name: '',
    id: '',
    type: '',
    logo: '',
  });
  const [team, setTeam] = useState<ITeam>({
    name: '',
    id: '',
    code: '',
    country: '',
    logo: '',
    founded: 2019,
    national: true,
  });
  const [formation, setFormation] = useState<string>('');
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [goals, setGoals] = useState<IGoal[]>([]);
  const [results, setResults] = useState<IResultsData>({
    played: {
      home: 0,
      away: 0,
      total: 0,
    },
    wins: {
      home: 0,
      away: 0,
      total: 0,
    },
    draws: {
      home: 0,
      away: 0,
      total: 0,
    },
    loses: {
      home: 0,
      away: 0,
      total: 0,
    },
  });

  return (
    <UserContext.Provider
      value={{
        key,
        setKey,
        country,
        setCountry,
        season,
        setSeason,
        league,
        setLeague,
        team,
        setTeam,
        formation,
        setFormation,
        players,
        setPlayers,
        goals,
        setGoals,
        results,
        setResults,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextData => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
