import styled from 'styled-components';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;
  margin: 0 auto;
  background-color: purple;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const RoundedButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: var(--purple);
  font-size: 16px;
  cursor: pointer;
`;
