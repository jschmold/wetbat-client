import React from 'react';

import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loadDestinations } from 'features/destinations/thunks';
import { loadQuotes } from 'features/quotes/thunks';
import { HomePage } from 'pages/Home';

export default function App() {
  const dispatch = useDispatch();
  dispatch(loadDestinations());
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
