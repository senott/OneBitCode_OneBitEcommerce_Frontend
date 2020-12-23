import React from 'react';

import WithAuthAdmin from '../../components/WithAuthAdmin';

const Home: React.FC = () => {
  return <h1>Parabéns! Você acessou o painel administrativo. \o/</h1>;
};

export default WithAuthAdmin(Home);
