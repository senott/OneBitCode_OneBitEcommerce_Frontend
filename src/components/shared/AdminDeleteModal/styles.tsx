import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  top: 20%;
`;

export const StyledModalBody = styled(Modal.Body)`
  background-color: var(--color-primary);
  padding: 50px;
  text-align: center;
  font-size: 29px;
`;
