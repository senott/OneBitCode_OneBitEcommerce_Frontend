import React from 'react';
import { BackgroundContainer } from './styles';

const BlueBackground: React.FC = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default BlueBackground;
