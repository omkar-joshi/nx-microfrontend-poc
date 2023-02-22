import { useAuth0 } from '@auth0/auth0-react';
import { Welcome } from '@genyus-nx-monorepo/shared-ui';

export function App() {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <>
      <Welcome title="normal module1" />
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
}

export default App;
