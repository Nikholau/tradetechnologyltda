/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import { FormLogin, InputWrapper, Title } from '../Login/style';
import { useUserContext } from '../../hooks/UserContext';
import Select from 'react-select';

export interface ILeague {
  id: string;
  value?: string;
  name: string;
  type: string;
  logo: string;
}

const Leagues: React.FC = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState<ILeague[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { key, country, league, setLeague } = useUserContext();

  const handleSelectCountry = useCallback(async () => {
    navigate('/teams');
  }, [navigate]);

  const handleChangeCountry = useCallback(
    (value: any) => {
      setLeague(value);
    },
    [setLeague],
  );

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
          `https://v3.football.api-sports.io/leagues?country=${country.label}`,
          requestOptions,
        );
        const data = await response.json();

        const transformedOptions = data.response.map((item: any) => ({
          value: item.league.id,
          label: item.league.name,
          logo: item.league.logo,
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
    <FormLogin onSubmit={handleSelectCountry}>
      <Title>Escolha a Liga do País</Title>
      <InputWrapper>
        <Select
          options={options}
          onChange={handleChangeCountry}
          placeholder="Escolha a liga do país selecionado"
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

export default Leagues;
