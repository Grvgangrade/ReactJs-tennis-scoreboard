import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import TennisScoreBoard from './containers/TennisScoreBoard';

export default (
  <Route path="/" component={TennisScoreBoard}>
  </Route>
);
