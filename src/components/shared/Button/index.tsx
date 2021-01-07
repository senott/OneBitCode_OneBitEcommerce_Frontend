import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconProp;
  action?: string;
  buttonType: string;
}

const Button: React.FC<ButtonProps> = ({ icon, action, type, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {icon && <FontAwesomeIcon icon={icon} className={action && 'mr-2'} />}
      {action}
    </StyledButton>
  );
};

export default Button;
