import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Welcome } from '@genyus-nx-monorepo/shared-ui';

const Home: React.FC = (): JSX.Element => {
  const { user } = useAuth0();

  return <Welcome username={user?.name} title="container app" />;
};

export default Home;
