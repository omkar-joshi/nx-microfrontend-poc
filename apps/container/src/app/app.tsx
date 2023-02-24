import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import { useAuth0 } from '@auth0/auth0-react';

import Home from './home';

const Module3 = React.lazy(() => import('module3/Module'));

const Module1 = React.lazy(() => import('module1/Module'));

const Module2 = React.lazy(() => import('module2/Module'));

export function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <React.Suspense fallback={null}>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container fluid className="d-flex justify-between align-items-center">
          <Navbar.Brand className="me-auto" href="/">
            Nx Micro-frontend example
          </Navbar.Brand>
          <Nav>
            {isAuthenticated ? (
              <Button
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Log Out
              </Button>
            ) : (
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col xs={2} className="bg-light shadow-sm">
            <Nav
              activeKey={window.location.pathname}
              variant="pills"
              className="flex-column mt-3"
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/module1">Module1</Nav.Link>
              <Nav.Link href="/module2">Module2</Nav.Link>
              <Nav.Link href="/module3">Module3</Nav.Link>
            </Nav>
          </Col>
          <Col xs={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/module3" element={<Module3 />} />

              <Route path="/module1" element={<Module1 />} />

              <Route path="/module2" element={<Module2 />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </React.Suspense>
  );
}

export default App;
