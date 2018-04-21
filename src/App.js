import React, { Component } from 'react';
import './App.css';
import LoginForm from './base/containers/LoginForm.jsx';
import Welcome from './base/containers/Welcome.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    };
  }

  loginUser() {
    this.setState({ isLogged: true });
  }

  render() {
    if (!this.state.isLogged) {
      return (
        <div className="app">
          <LoginForm loginUser={this.loginUser.bind(this)} />
        </div>
      );
    } else {
      return (
        <div className="app">
          <Welcome />
        </div>
      );
    }
  }
}

export default App;
