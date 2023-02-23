import './welcome.scss';

export interface WelcomeProps {
  username?: string;
  title: string;
}

export function Welcome({ title, username }: WelcomeProps) {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello{username ? ` ${username}` : ''}, </span>
            Welcome to {title} 👋
          </h1>
        </div>
      </div>
    </div>
  );
}
