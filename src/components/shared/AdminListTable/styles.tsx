import { Table } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-secondary);
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const StyledTable = styled(Table)`
  color: #ffffff;
`;

export const TableLine = styled.tr`
  background-color: var(--color-background);
  padding-right: 110px;

  :hover {
    color: #ffffff !important;
  }
`;
