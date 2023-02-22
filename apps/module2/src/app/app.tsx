import { useAuth0 } from '@auth0/auth0-react';
import { Table, Welcome, Appointment } from '@genyus-nx-monorepo/shared-ui';
import { useQuery } from '@genyus-nx-monorepo/shared-util';
import { useMemo } from 'react';
import { Column } from 'react-table';

export function App() {
  const { isAuthenticated, user, logout } = useAuth0();
  const { data, loading } = useQuery('/appointments');
  console.log('isauth >>> ', isAuthenticated);

  const columns = useMemo<Column<Appointment>[]>(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the dat
      },
      {
        Header: 'Patient Name',
        accessor: 'patientName',
      },
      {
        Header: 'Doctor Name',
        accessor: 'doctorName',
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
      <Welcome title="module2" />
      {isAuthenticated && (
        <div>
          <h2>{user?.name}</h2>
          <p>{JSON.stringify(user)}</p>

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
