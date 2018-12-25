import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { fetchGainers} from '../actions/gainersActions';
import '../style/StockList.sass';
import StockItem from './StockItem';
import PropTypes from 'prop-types';

class StockList extends Component {


  constructor() {
    super();
    this.state = {
        isLoaded: false,
        error: 0
    };
  }

  componentWillMount() {
    this.props.fetchGainers();
  };


  render() {
      this.state.isLoaded = this.props.data.isLoaded;
      this.state.error = this.props.data.gainers.length;
      if (!this.state.isLoaded) {
        return <div>Loading...</div>;
      } else if (this.state.error) {
        return <Router>
            <div className="StockList">
              <ul>
                {this.props.data.gainers.map(stock => (
                  <Link key={stock.symbol} to={stock.symbol}>
                    <li>
                      {stock.companyName} <span>{stock.high}</span>
                    </li>
                    <Switch>
                    <Route
                      exact
                      path={"/" + stock.symbol}
                      component={StockItem}
                    />
                    </Switch>
                  </Link>
                ))}
              </ul>
            </div>
          </Router>;
      } else if (!this.state.error) {
        return <p>Error Loading Data</p>
      }
  }
}

StockList.propTypes = {
  fetchGainers: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data : state.gainers.gainersData
});

export default connect(mapStateToProps, { fetchGainers })(StockList);