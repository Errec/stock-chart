import React, { Component } from 'react';
import Header from './Header';
import StockList from './StockList';
import { Provider } from 'react-redux';
import '../style/App.sass';
import store from '../store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
          <StockList></StockList>
        </div>
      </Provider>
    );
  }
}

export default App;
