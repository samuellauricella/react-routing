import React from 'react';
import {Link} from 'react-router'

export default class App extends React.Component {
  render() {
    return (
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link to="/custom">Custom</Link>
        </p>
    );
  }
}
