import React, { Component } from 'react';
import StockChart from "./StockChart";
import '../style/StockItem.sass';

class StockItem extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      company: {}
    };
  }

  componentDidMount() {
    fetch("https://api.iextrading.com/1.0/stock" + this.props.match.path + "/company")
      .then(res => res.json())
      .then(result => {
          this.setState({ isLoaded: true, company: result });
        }, error => {
          this.setState({ isLoaded: true, error });
        });
  }

  render() {
    const { error, isLoaded, company } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div>
        {company.symbol} {company.description}
        <StockChart symbol={company.symbol}></StockChart>
      </div>;
    }
  }
}

export default StockItem;