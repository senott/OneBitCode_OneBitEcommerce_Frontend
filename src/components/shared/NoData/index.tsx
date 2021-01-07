import React from 'react';

import { Container } from './styles';

interface NoDataProps {
  message?: string;
}

const NoData: React.FC<NoDataProps> = ({
  message = 'Nenhum dado encontrado.',
}) => {
  return <Container>{message}</Container>;
};

export default NoData;
