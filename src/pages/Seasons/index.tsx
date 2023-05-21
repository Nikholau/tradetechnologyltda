import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import { InputWrapper, Title } from '../Login/style';
import { useUserContext } from '../../hooks/UserContext';
import Select, { OptionProps, GroupBase } from 'react-select';
import {
  ButtonWrapper,
  ContentWrapper,
  Flag,
  FormSeason,
  SubTitle,
} from './style';

export interface ISeason {
  label: string;
  value: string;
}

interface IOptionSeason {
  label: string;
  value: string;
}

const Seasons: React.FC = () => {
  const navigate = useNavigate();
  const { key, country, setSeason } = useUserContext();
  const [seasonOptions, setSeasonOptions] = useState<
    OptionProps<IOptionSeason, false>[]
  >([]);

  const handleSelectSeason = async () => {
    navigate('/leagues');
  };

  const handleChangeSeason = (
    selectedOption: OptionProps<
      IOptionSeason,
      false,
      GroupBase<IOptionSeason>
    > | null,
  ) => {
    if (selectedOption) {
      const { value } = selectedOption.data;
      setSeason({ label: value, value });
    } else {
      setSeason({ label: '', value: '' });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append('x-rapidapi-key', key);
      myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
      };

      try {
        const response = await fetch(
          `https://v3.football.api-sports.io/leagues/seasons`,
          requestOptions,
        );
        const data = await response.json();

        const transformedOptions: OptionProps<IOptionSeason, false>[] =
          data.response.map((item: string) => ({
            label: item,
            value: item,
            data: {
              label: item,
              value: item,
            },
          }));

        setSeasonOptions(transformedOptions);
      } catch (error) {
        console.error('Erro ao carregar as opções:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isButtonDisabled = !country;

  return (
    <FormSeason onSubmit={handleSelectSeason}>
      <ContentWrapper>
        <Title>Insira a Temporada Desejada</Title>
        <SubTitle>País selecionado: {country.label}</SubTitle>
        <Flag>
          <img src={country.flag} alt="flag" height="200px" />
        </Flag>
        <InputWrapper>
          <Select
            options={seasonOptions}
            onChange={handleChangeSeason}
            placeholder="Selecione a temporada desejada"
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button type="submit" disabled={isButtonDisabled}>
            Selecionar
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
      <ToastContainer />
    </FormSeason>
  );
};

export default Seasons;
