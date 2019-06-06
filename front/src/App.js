import React, { Component } from 'react';

class App extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    fetch('/message')
      .then(res => res.json())
      .then(({ message }) => this.setState({ message }));
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default App;
