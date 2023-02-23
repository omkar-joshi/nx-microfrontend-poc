import Container from 'react-bootstrap/Container';
import './welcome.scss';

export interface WelcomeProps {
  username?: string;
  title: string;
}

export function Welcome({ title, username }: WelcomeProps) {
  return (
    <Container className="d-flex justify-content-center">
      <div id="welcome">
        <h1>
          <span> Hello{username ? ` ${username}` : ''}, </span>
          Welcome to {title} 👋
        </h1>
      </div>
    </Container>
  );
}
