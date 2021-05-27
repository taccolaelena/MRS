import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.scss';

import Home from './components/Home/Home';
import Appointments from './components/Appointments/Appointments';
import Login from './components/Login/Login';


export default function App(props) {
  const { history } = props;

  return (
    <div className='App'>
      <Switch>
        <Route history={history} path='/login' component={Login} />
        <Route history={history} path='/home' component={Home} />
        <Route history={history} path='/appointments' component={Appointments} />
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  );
}

