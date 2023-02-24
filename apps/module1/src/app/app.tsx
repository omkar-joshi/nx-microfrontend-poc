import { useAuth0 } from '@auth0/auth0-react';
import { Table, Welcome, Patient } from '@genyus-nx-monorepo/shared-ui';
import { useQuery } from '@genyus-nx-monorepo/shared-util';
import { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import { Column } from 'react-table';

export function App() {
  const { user, isLoading } = useAuth0();
  const { data, loading } = useQuery('/patients');

  const columns = useMemo<Column<Patient>[]>(
    () => [
      {
        Header: 'Patient ID',
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
        Header: 'Patient Name',
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
      <Welcome username={user?.name} title="module1" />

      <Container className="d-flex justify-content-center mt-5">
        {loading || isLoading ? (
          <div>Loading...</div>
        ) : (
          <Table columns={columns} data={data || []} />
        )}
      </Container>
    </>
  );
}

export default App;
