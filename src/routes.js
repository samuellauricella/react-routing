import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import Container from './Container'
import Custom from './Custom'

import App from './App';
import './index.css';


const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={App} />
        <Route path="/custom" component={Custom} />

      </Route>
      <Route path="*">
        <IndexRedirect to="/" />
      </Route>
    </Router>
  )
}

export default Routes
