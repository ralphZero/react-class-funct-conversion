import React, { Component } from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

import './App.css';

let count = 1;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FunctionalComponent count={count} />
          <ClassComponent count={count} />
        </header>
      </div>
    );
  }
}

export default App;
