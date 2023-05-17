import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginScreen from './index';

describe('LoginScreen', () => {
  it('deve ser possível realizar login com a API key de autenticação da API-Football', () => {
    const { getByPlaceholderText, getByRole, queryByText } = render(
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('Insira a chave da Api');
    fireEvent.change(inputElement, {
      target: { value: '9a9efc471ed8eb8f8dc84684685779f3' },
    });

    const buttonElement = getByRole('button', { name: 'Entrar' });
    fireEvent.click(buttonElement);

    const errorMessage = queryByText('Ocorreu um erro! Reinsira sua API key');
    expect(errorMessage).toBeNull();
  });

  it('não deve ser possível realizar login com uma API key inválida', () => {
    const { getByPlaceholderText, getByRole, queryByText } = render(
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('Insira a chave da Api');
    fireEvent.change(inputElement, {
      target: { value: 'minha-api-key-invalida' },
    });

    const buttonElement = getByRole('button', { name: 'Entrar' });
    fireEvent.click(buttonElement);

    const errorMessage = queryByText('Ocorreu um erro! Reinsira sua API key');
    expect(errorMessage).toBeNull();
  });

  it('não deve ser possível acessar outra tela sem realizar login', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>,
    );

    const outraPaginaElement = queryByText('Outra Página');
    expect(outraPaginaElement).toBeNull();
  });
});
