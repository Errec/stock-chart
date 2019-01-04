import React, { Component } from 'react';
import Swal from 'sweetalert2';
import '../style/SearchBar.sass';


class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      console.log(`https://api.iextrading.com/1.0/stock/${this.state.value}/book`)
      fetch(`https://api.iextrading.com/1.0/stock/${this.state.value}/book`)
        .then(data => data.json())
        .then(data => {
          console.log(data)
          const values = data.quote
          Swal({
            title: values.companyName,
            html: `<hr>
                   <p>Latest Price: ${values.latestPrice}</p>
                   <p>Primary Exchange: <strong>${values.primaryExchange}</strong></p>
                   <p>Sector: ${values.sector}</p>`,
            showConfirmButton: true
          })

        })
        .catch(error => {
          Swal({
            text: "Cant find company",
            type: "warning"
          })
        });
      event.preventDefault();
    }

    render() {
      return (
        <form className = "SearchBar" onSubmit={this.handleSubmit}>
          <label>
            Enter Company Symbol
          </label>
          <input placeholder="aapl, fb, twtr" type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
      );
    }
  }

export default SearchBar;