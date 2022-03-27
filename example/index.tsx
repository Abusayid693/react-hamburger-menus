import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { GhostButton } from '../src/GhostButton/GhostButton';

const App = () => {
  return (
    <div>
      <GhostButton>
        <ul>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </GhostButton>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
