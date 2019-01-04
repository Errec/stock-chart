import React, { Component } from 'react';
import Header from './Header';
import StockList from './StockList';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import '../style/App.sass';
import store from '../store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
          <SearchBar></SearchBar>
          <StockList></StockList>
        </div>
      </Provider>
    );
  }
}

export default App;
