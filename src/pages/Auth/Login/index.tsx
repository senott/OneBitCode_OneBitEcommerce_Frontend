import React from 'react';

import LoginForm from '../../../components/LoginForm';
import MainComponent from '../../../components/shared/MainComponent';

const Login: React.FC = () => {
  const links = [
    {
      path: '/Auth/SignUp',
      linkText: 'Cadastrar usuário',
    },
    {
      path: '/Auth/PasswordRecovery',
      linkText: 'Esqueci minha senha',
    },
  ];

  return (
    <MainComponent>
      <LoginForm
        titlePhrase="Acessar minha conta"
        buttonPhrase="Acessar"
        links={links}
      />
    </MainComponent>
  );
};

export default Login;
