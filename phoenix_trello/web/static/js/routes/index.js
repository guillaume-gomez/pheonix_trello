import { IndexRoute, Route } from 'react-router';
import React from 'react';
import MainLayout from "../layouts/MainLayout.react";
import Counter from '../components/Counter.react';

export default (
  <Route component={MainLayout}>
    <Route path="/" component={Counter} />
  </Route>
);