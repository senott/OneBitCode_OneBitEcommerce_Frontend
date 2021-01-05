import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export const Input = styled(FormControl)`
  background-color: var(--color-secondary);
  border: none;
  height: 30px;

  :focus {
    background-color: var(--color-secondary);
  }
`;

export const Button = styled.button`
  margin-top: -5px;
`;
