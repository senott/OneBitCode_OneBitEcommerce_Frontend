import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledButton = styled(Button)`
  background: none;

  border: ${props =>
    props.buttonType === 'red'
      ? '2px solid rgb(200, 10, 10)'
      : '2px solid rgb(10, 10, 200)'};

  :hover {
    border: ${props =>
      props.buttonType === 'blue'
        ? '2px solid rgb(10, 200, 200)'
        : '2px solid rgb(200, 10, 10)'};
  }
`;
