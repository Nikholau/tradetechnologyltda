import styled, { css } from 'styled-components';

export const RoundedButton = styled.button<{ disabled?: boolean }>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: var(--purple);
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
