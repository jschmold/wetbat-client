import React from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loadQuotes } from './features/quotes/actions';
import { HomePage } from './pages/Home';

export default function App() {
  const dispatch = useDispatch();
  dispatch(loadQuotes());

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
