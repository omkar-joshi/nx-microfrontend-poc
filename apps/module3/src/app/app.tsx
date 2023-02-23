import { useAuth0 } from '@auth0/auth0-react';
import {
  Table,
  Welcome,
  Patient,
  Appointment,
} from '@genyus-nx-monorepo/shared-ui';
import { useQuery } from '@genyus-nx-monorepo/shared-util';
import { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Column } from 'react-table';

export function App() {
  const { user, isLoading } = useAuth0();
  const { data: patientsData, loading: patientsLoading } =
    useQuery('/patients');
  const { data: appointmentsData, loading: appointmentsLoading } =
    useQuery('/appointments');

  const patientColumns = useMemo<Column<Patient>[]>(
    () => [
      {
        Header: 'Patient ID',
        accessor: 'id', // accessor is the "key" in the data
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

  const appointmentColumns = useMemo<Column<Appointment>[]>(
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
      <Welcome username={user?.name} title="module3" />

      <Container className="d-flex justify-content-between mt-5">
        {patientsLoading || appointmentsLoading || isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Col className="me-4">
              <Table columns={patientColumns} data={patientsData || []} />
            </Col>
            <Col>
              <Table
                columns={appointmentColumns}
                data={appointmentsData || []}
              />
            </Col>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
