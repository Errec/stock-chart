import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchChart } from '../actions/gainersActions';
import { Line as LineChart } from 'react-chartjs-2';


class StockChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      isLoaded: false
    }
  }

  componentWillMount() {
    this.props.fetchChart(this.props.symbol);
  }

  componentDidMount() {


  }

  render() {
    let labels = [];
    let lowValues = [];
    let highValues = [];

    this.props.data.chart.forEach(value => {
      labels.push(value.label);
      lowValues.push(value.high);
      highValues.push(value.low); 
    });

    return (
      <div className="StockChart">
        <LineChart 
          data = {{
            labels: labels,
            datasets: [
              {
                label: 'Highest',
                data: highValues
              },
              {
                label: 'Lowest',
                data: lowValues
              },
            ]}
          }
          options = {{
            responsive: true,
            maintainAspectRatio: false
          }} />
      </div>
    )
  }
}

StockChart.propTypes = {
  fetchChart: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data : state.gainers.chartData
});

export default connect(mapStateToProps, { fetchChart })(StockChart);
