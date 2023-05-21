import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  font-family: Arial, sans-serif;
`;

export const TableHeader = styled.th`
  background-color: var(--purple);
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

export const TableData = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;
