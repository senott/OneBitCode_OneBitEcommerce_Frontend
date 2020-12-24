import React from 'react';
import AdminComponent from '../../components/shared/AdminComponent';

import WithAuthAdmin from '../../components/WithAuthAdmin';

const Home: React.FC = () => {
  return (
    <AdminComponent>
      <h1>Painel Admin</h1>
    </AdminComponent>
  );
};

export default WithAuthAdmin(Home);
