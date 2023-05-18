/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import { FormLogin, InputWrapper, Title } from '../Login/style';
import { useUserContext } from '../../hooks/UserContext';
import Select, { OptionProps } from 'react-select';

export interface IOptionCountry {
  label: string;
  value: string;
  flag: string;
}

interface ICountry {
  name: string;
  code: string;
  flag: string;
}

const CustomOption: React.FC<OptionProps<IOptionCountry, false>> = ({
  innerProps,
  label,
  data,
}) => (
  <div {...innerProps}>
    <img
      src={data.flag}
      alt={label}
      style={{ width: '20px', marginRight: '10px' }}
    />
    {label}
  </div>
);

const Countries: React.FC = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState<IOptionCountry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { key, country, setCountry } = useUserContext();

  const handleSelectCountry = async () => {
    navigate('/seasons');
  };

  const handleChangeCountry = (value: any) => {
    setCountry(value);
  };

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
          `https://v3.football.api-sports.io/countries`,
          requestOptions,
        );
        const data = await response.json();

        const transformedOptions: IOptionCountry[] = data.response.map(
          (item: ICountry) => ({
            label: item.name,
            value: item.code,
            flag: item.flag,
          }),
        );

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

  const isButtonDisabled = !country;

  return (
    <FormLogin onSubmit={handleSelectCountry}>
      <Title>Insira a Liga do País</Title>
      <InputWrapper>
        <Select
          options={options}
          onChange={handleChangeCountry}
          placeholder="Escreva o nome do seu país em inglês"
          isLoading={isLoading}
          isDisabled={isLoading}
          getOptionLabel={(option: IOptionCountry) => option.label}
          getOptionValue={(option: IOptionCountry) => option.value}
          components={{
            Option: CustomOption,
          }}
        />
      </InputWrapper>
      <Button type="submit" disabled={isButtonDisabled}>
        Selecionar
      </Button>
      <ToastContainer />
    </FormLogin>
  );
};

export default Countries;
