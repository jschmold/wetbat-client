import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
