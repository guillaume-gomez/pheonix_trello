import { IndexRoute, Route } from 'react-router';
import React from 'react';
import MainLayout from "../layouts/MainLayout.react";
import Counter from '../components/Counter.react';
import RegistrationsNew from "../views/registrations/new";
import SessionsNew from '../views/sessions/new';

export default (
  <Route component={MainLayout}>
    <Route path="/sign_up" component={RegistrationsNew} />
    <Route path="/sign_in" component={SessionsNew} />

    <Route path="/" component={Counter} />
  </Route>
);