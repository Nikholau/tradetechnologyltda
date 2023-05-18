import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components/Input';
import { FormLogin, InputWrapper, RoundedButton, Title } from './style';
import { useUserContext } from '../../hooks/UserContext';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { key, setKey } = useUserContext();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append('x-rapidapi-key', key);
      myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
      };

      const response = await fetch(
        `https://v3.football.api-sports.io/${key}`,
        requestOptions,
      );
      const data = await response.json();

      if (data.errors.token) {
        toast.error('Ocorreu um erro! Reinsira sua API key', {
          autoClose: 3000,
        });
        setKey('');
      } else {
        navigate('/countries');
      }
    } catch (error) {
      toast.error('Erro na requisição', { autoClose: 3000 });
    }
  };

  return (
    <FormLogin onSubmit={handleLogin}>
      <Title>Meu Time</Title>
      <InputWrapper>
        <Input
          placeholder="Insira a chave da Api"
          onChange={(value) => setKey(value)}
          value={key}
          label="API Key"
        />
      </InputWrapper>
      <RoundedButton type="submit">Entrar</RoundedButton>
      <ToastContainer />
    </FormLogin>
  );
};

export default LoginScreen;
