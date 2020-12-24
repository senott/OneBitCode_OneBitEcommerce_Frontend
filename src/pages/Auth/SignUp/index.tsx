import React from 'react';

import MainComponent from '../../../components/shared/MainComponent';
import SignUpForm from '../../../components/SignUpForm';

const Login: React.FC = () => {
  const links = [
    {
      path: '/Auth/Login',
      linkText: 'Acessar minha conta',
    },
  ];

  return (
    <MainComponent>
      <SignUpForm
        titlePhrase="Criar nova conta"
        buttonPhrase="Criar"
        links={links}
      />
    </MainComponent>
  );
};

export default Login;
