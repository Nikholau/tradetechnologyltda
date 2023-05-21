import React from 'react';
import { Table, TableData, TableHeader, TableWrapper } from './style';
import { useUserContext } from '../../../../hooks/UserContext';

export interface Fixture {
  home: number;
  away: number;
  total: number;
}

export interface IResultsData {
  played: Fixture;
  wins: Fixture;
  draws: Fixture;
  loses: Fixture;
}

const ResultsTable: React.FC = () => {
  const { results } = useUserContext();

  return (
    <TableWrapper>
      <h2>Tabela de Resultados</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Total de Jogos</TableHeader>
            <TableHeader>Vitórias</TableHeader>
            <TableHeader>Derrotas</TableHeader>
            <TableHeader>Empates</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{results.played.total}</TableData>
            <TableData>{results.wins.total}</TableData>
            <TableData>{results.loses.total}</TableData>
            <TableData>{results.draws.total}</TableData>
          </tr>
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default ResultsTable;
