import React from 'react';
import { GlobalStyle } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default GlobalLayout;
