import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <form action="">
        <fieldset>
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="remember">Remember me</label>
          <input type="checkbox" name="remember" id="remember" />
          <input type="submit" value="login" />
        </fieldset>
      </form>
    );
  }
}

export default LoginForm;
