import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const TitleAndPathCol = styled(Col)`
  display: inline;
  color: var(--color-gray-light);
  font-size: 11px;
  margin-left: 10px;
  margin-top: 10px;

  @media (max-width: 1200px) {
    display: none !important;
  }
`;
