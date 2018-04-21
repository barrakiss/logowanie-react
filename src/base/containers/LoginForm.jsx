import React, { Component } from 'react';

// import FormErrors from './FormError';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
  }

  loginUser(login, password) {
    return login === 'test@test.pl' && password === 'Password1';
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Password
    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = 'Cannot be empty';
    }

    if (typeof fields['password'] !== 'undefined') {
      if (
        !fields['password'].match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/i
        )
      ) {
        formIsValid = false;
        errors['password'] = 'Invalid password';
      }
    }

    //Email
    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = 'Cannot be empty';
    }

    if (typeof fields['email'] !== 'undefined') {
      if (!fields['email'].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        formIsValid = false;
        errors['email'] = 'Invalid email';
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (
      this.handleValidation() &&
      this.loginUser(this.state.fields['email'], this.state.fields['password'])
    ) {
      this.props.loginUser();
    } else if (this.handleValidation()) {
      alert('Invalid email or password');
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-box__login-bg">
          <form
            className="login-box__position"
            onSubmit={this.contactSubmit.bind(this)}
          >
            <div className="form element-mbottom--20">
              <div className="element-mbottom--20">
                <label
                  htmlFor="email"
                  className="form__labels element-mbottom--5"
                >
                  Email
                </label>
                <input
                  className="form__input"
                  refs="email"
                  type="text"
                  placeholder="Email"
                  onChange={this.handleChange.bind(this, 'email')}
                  value={this.state.fields['email']}
                />
                <span className="form__error">
                  {this.state.errors['email']}
                </span>
              </div>
              <div className="element-mbottom--10">
                <label
                  htmlFor="password"
                  className="form__labels element-mbottom--5"
                >
                  Password
                </label>
                <input
                  className="form__input"
                  ref="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange.bind(this, 'password')}
                  value={this.state.fields['password']}
                />
                <span className="form__error">
                  {this.state.errors['password']}
                </span>
              </div>
            </div>

            <div className="page-btn--center">
              <input
                className="my-checkbox"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <button
                className="page-btn page-btn--mleft"
                id="submit"
                type="Submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
