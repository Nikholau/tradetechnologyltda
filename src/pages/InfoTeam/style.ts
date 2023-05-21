import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PlayerListWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  margin: 2rem;

  @media (max-width: 768px) {
    width: auto;
    margin: 2rem 0;
  }
`;

export const ResultsChartWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ResultsTableWrapper = styled.div`
  width: 50%;
  margin: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem 0;
  }
`;

export const GoalsChartWrapper = styled.div`
  width: 50%;
  margin: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem 0;
  }
`;
