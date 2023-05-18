import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IOptionCountry } from '../pages/Countries';

export interface ISeason {
  label: string;
  value: string;
}

interface UserContextData {
  key: string;
  setKey: (user: string) => void;
  country: IOptionCountry;
  setCountry: (user: IOptionCountry) => void;
  season: ISeason; // Corrigir o tipo para ISeason
  setSeason: (user: ISeason) => void; // Corrigir o tipo para ISeason
}

const UserContext = createContext<UserContextData | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [key, setKey] = useState('');
  const [country, setCountry] = useState({ label: '', value: '', flag: '' });
  const [season, setSeason] = useState<ISeason>({ label: '', value: '' });

  return (
    <UserContext.Provider
      value={{ key, setKey, country, setCountry, season, setSeason }}
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
