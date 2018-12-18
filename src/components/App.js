import React, { Component } from 'react';
import Header from './Header';
import StockList from './StockList';
import '../style/App.sass';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header></Header>
          <StockList></StockList>
        </div>
    );
  }
}

export default App;
