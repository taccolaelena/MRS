import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.scss';

import Home from './components/Home/Home';
import Appointments from './components/Appointments/Appointments';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className='App'>
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/appointments' component={Appointments} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    );
  }
}

export default App;