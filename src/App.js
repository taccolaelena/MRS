import React, { Component } from 'react';

import './App.scss';

import Appointments from './components/Appointments/Appointments'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appointments/>
      </div>
    );
  }
}

export default App;