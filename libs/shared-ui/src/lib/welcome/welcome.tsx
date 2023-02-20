import './welcome.scss';

/* eslint-disable-next-line */
export interface WelcomeProps {
  title: string;
}

export function Welcome({ title }: WelcomeProps) {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome {title} 👋
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
