import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Welcome } from '@genyus-nx-monorepo/shared-ui';

const Home: React.FC = (): JSX.Element => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <>
      <Welcome title="container" />
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}

      {isAuthenticated && (
        <div>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>

          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
