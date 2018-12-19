import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import '../style/StockList.sass';
import StockItem from './StockItem';

class StockList extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            stocks: []
        };
    }

    componentDidMount() {
        fetch("https://api.iextrading.com/1.0/stock/market/list/gainers")
          .then(res => res.json())
          .then(result => {
              this.setState({ isLoaded: true, stocks: result });
              console.log(result)
            }, error => {
              this.setState({ isLoaded: true, error });
            });
    }

    render() {
        const { error, isLoaded, stocks } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <Router>
                <div className="StockList">
                  <ul>
                    {stocks.map(stock => (
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
        }
    }
}

export default StockList;