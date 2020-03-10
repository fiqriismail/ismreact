import React, { Component } from 'react';
import axios from 'axios';

class NameList extends Component {
  state = {
    randomName: '',
  };

  getRandomNameHandler = () => {
    axios.get('https://randomuser.me/api').then(response => {
      this.setState({ randomName: response.data.results[0].name });
    });
  };

  render() {
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.getRandomNameHandler}>
          Pick a random name
        </button>
        <p>
          <h4>
            Name is : {this.state.randomName.first} {this.state.randomName.last}{' '}
          </h4>
        </p>
      </div>
    );
  }
}

export default NameList;
