import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  icon?: IconProp;
  action?: string;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ icon, action, type }) => {
  return (
    <StyledButton>
      {icon && <FontAwesomeIcon icon={icon} className={action && 'mr-2'} />}
      {action}
    </StyledButton>
  );
};

export default Button;
