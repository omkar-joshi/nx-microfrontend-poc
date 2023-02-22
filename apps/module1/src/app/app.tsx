import { useAuth0 } from '@auth0/auth0-react';
import { Table, Welcome, Patient } from '@genyus-nx-monorepo/shared-ui';
import { useQuery } from '@genyus-nx-monorepo/shared-util';
import { useMemo } from 'react';
import { Column } from 'react-table';

export function App() {
  const { isAuthenticated, user, logout } = useAuth0();
  const { data, loading } = useQuery('/patients');

  const columns = useMemo<Column<Patient>[]>(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the dat
      },
      {
        Header: '',
        accessor: 'avatar',
        Cell: ({ value, row }) => (
          <img width={50} height={50} src={value} alt={row.original.name} />
        ),
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Created At',
        accessor: 'createdAt',
        Cell: ({ value }) => <div>{new Date(value).toDateString()}</div>,
      },
    ],
    []
  );

  return (
    <>
      <Welcome title="module1" />
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

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table columns={columns} data={data || []} />
      )}
    </>
  );
}

export default App;
