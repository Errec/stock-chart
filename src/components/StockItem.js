import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StockChart from "./StockChart";
import { fetchCompany } from '../actions/gainersActions';
import '../style/StockItem.sass';

class StockItem extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      isLoaded: false
    };
  }

  componentWillMount() {
    this.props.fetchCompany(this.props.match.path);
  }

  render() {
    this.state.isLoaded = this.props.data.isLoaded
    this.state.error = this.props.data.company.length
    if (this.state.error) {
      return <div>Error Loading Chart Data</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="StockItem">
        <p>{this.props.data.company.name} {this.props.data.company.description}</p>
        <StockChart symbol={this.props.data.company.symbol}></StockChart>
      </div>
    }
  }
}

StockItem.propTypes = {
  fetchCompany: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data : state.gainers.companyData
});

export default connect(mapStateToProps, { fetchCompany })(StockItem);