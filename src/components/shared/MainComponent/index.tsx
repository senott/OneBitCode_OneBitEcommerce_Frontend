import React from 'react';

import StoreFrontFooter from '../Footer/StoreFrontFooter';
import StoreFrontHeader from '../Header/StoreFrontHeader';
import { Container } from './styles';

const MainComponent: React.FC = ({ children }) => {
  return (
    <Container className="d-flex flex-column sticky-footer-wrapper">
      <StoreFrontHeader />
      <Container className="container flex-fill">{children}</Container>
      <StoreFrontFooter />
    </Container>
  );
};

export default MainComponent;
