import React from "react";
import { Line as LineChart } from 'react-chartjs-2';

function chartData() {
  return {
    labels: [],
    datasets: [
      {
        label: 'Highest',
        data: []
      },
      {
        label: 'Lowest',
        data: []
      },
    ]
  }
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}


class StockChart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData(),
      error: null,
      isLoaded: false,
      companyData: {}
    }
  }

  componentDidMount() {
    fetch("https://api.iextrading.com/1.0/stock/" + this.props.symbol + "/chart")
      .then(res => res.json())
      .then(result => {
        
        let labels = [];
        let lowValues = [];
        let highValues = [];
        
        this.setState({ isLoaded: true, companyData: result });
        this.state.companyData.forEach(el => {
          labels.push(el.label);
          lowValues.push(el.high);
          highValues.push(el.low);
        });
        
        const newData = {
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
          ]};

        this.setState({ data: newData });

        }, error => {
          this.setState({ isLoaded: true, error });
        });
  }

  render() {
    return (
      <div className="StockChart">
        <LineChart data={this.state.data}
          options={options} />
      </div>
    )
  }
}

export default StockChart;
