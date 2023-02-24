import { useAuth0 } from '@auth0/auth0-react';
import { Table, Welcome, Appointment } from '@genyus-nx-monorepo/shared-ui';
import { useQuery } from '@genyus-nx-monorepo/shared-util';
import { useMemo } from 'react';
import { Column } from 'react-table';
import Container from 'react-bootstrap/Container';

export function App() {
  const { user, isLoading } = useAuth0();
  const { data, loading } = useQuery('/appointments');

  const columns = useMemo<Column<Appointment>[]>(
    () => [
      {
        Header: 'Appointment ID',
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
      <Welcome username={user?.name} title="module2" />

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
