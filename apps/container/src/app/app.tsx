import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import Home from './home';

const Module3 = React.lazy(() => import('module3/Module'));

const Module1 = React.lazy(() => import('module1/Module'));

const Module2 = React.lazy(() => import('module2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/module1">Module1</Link>
        </li>

        <li>
          <Link to="/module2">Module2</Link>
        </li>

        <li>
          <Link to="/module3">Module3</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module3" element={<Module3 />} />

        <Route path="/module1" element={<Module1 />} />

        <Route path="/module2" element={<Module2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
