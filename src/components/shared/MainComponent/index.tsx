import React from 'react';

import GlobalLayout from '../../../layouts/Global';
import StoreFrontHeader from '../Header/StoreFrontHeader';
import { Container } from './styles';

const MainComponent: React.FC = ({ children }) => {
  return (
    <GlobalLayout>
      <Container className="d-flex flex-column sticky-footer-wrapper">
        <StoreFrontHeader />
        <Container className="container flex-fill">{children}</Container>
      </Container>
    </GlobalLayout>
  );
};

export default MainComponent;
