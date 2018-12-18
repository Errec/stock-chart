import React, { Component } from 'react';
import Header from './Header';
import '../style/App.sass';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header></Header>
        </div>
    );
  }
}

export default App;
