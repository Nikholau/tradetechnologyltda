/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import { useUserContext } from '../../hooks/UserContext';
import Select from 'react-select';
import { FormLogin, InputWrapper, Title } from '../Login/style';

export interface ITeam {
  id: string;
  value?: string;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

const Teams: React.FC = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState<ITeam[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { key, league, season, setTeam } = useUserContext();

  const handleSelectTeam = useCallback(async () => {
    navigate('/infoteam');
  }, [navigate]);

  const handleChangeTeam = useCallback((value: any) => {
    setTeam(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const myHeaders = new Headers();
      myHeaders.append('x-rapidapi-key', key);
      myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
      };

      try {
        const response = await fetch(
          `https://v3.football.api-sports.io/teams?league=${league.value}&season=${season.value}`, // Atualize a URL para buscar times
          requestOptions,
        );
        const data = await response.json();

        const transformedOptions = data.response.map((item: any) => ({
          value: item.team.id,
          label: item.team.name,
          logo: item.team.logo,
        }));

        setOptions(transformedOptions);
      } catch (error) {
        console.error('Erro ao carregar as opções:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isButtonDisabled = !league;

  return (
    <FormLogin onSubmit={handleSelectTeam}>
      <Title>Insira o Time</Title> {/* Atualize o título do formulário */}
      <InputWrapper>
        <Select
          options={options}
          onChange={handleChangeTeam}
          placeholder="Escolha o time"
          isLoading={isLoading}
          isDisabled={isLoading}
        />
      </InputWrapper>
      <Button type="submit" disabled={isButtonDisabled}>
        Selecionar
      </Button>
      <ToastContainer />
    </FormLogin>
  );
};

export default Teams;
