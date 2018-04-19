import React, { Component } from 'react';
import FormErrors from './FormError';

var hotStyle = {
  color: 'black',
  height: '200px',
  width: '200px',
  border: '1px solid red',
  backgroundColor: 'green'
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/i
        );
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    return (
      <form action="">
        <div className="login-form">
          <div style={hotStyle}>
            <FormErrors formErrors={this.state.formErrors} />
          </div>

          <div className={`${this.errorClass(this.state.formErrors.email)}`}>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
          </div>

          <div className={`${this.errorClass(this.state.formErrors.password)}`}>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleUserInput}
            />
          </div>

          <label htmlFor="remember">Remember me</label>
          <input type="checkbox" name="remember" id="remember" />
          <input type="submit" value="login" />
        </div>
      </form>
    );
  }
}

export default LoginForm;
