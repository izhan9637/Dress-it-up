import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    
    <div>
      <Link to='/tests'>TestsPage</Link>
      <h1>HATS PAGE </h1>
    </div>
  );
};

const TestsPage = () => {
  return (
    <div>
      <h1>Tests PAGE </h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/tests' component={TestsPage} />

      </Switch>
    </div>
  );
}

export default App;