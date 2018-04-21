import React, { Component } from 'react';
// import logo from './assets/img/logo.svg';
import './App.css';
import LoginForm from './base/containers/LoginForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    };
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          {/*<img src={logo} className="app-logo" alt="logo"/>*/}
        </header>
        <LoginForm isLogged={this.state.isLogged} />
      </div>
    );
  }
}

export default App;
