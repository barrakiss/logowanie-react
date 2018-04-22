import React from 'react';
import LoginForm from './base/containers/LoginForm';

it('should login user with correct password', () => {
  //Arrange
  let isLoggedIn = false;
  const loginUser = () => {
    isLoggedIn = true;
  };
  const loginForm = mount(<LoginForm loginUser={loginUser} />);

  loginForm.find('#email').text('test@test.test');
  loginForm.find('#password').text('Password1');
  loginForm.find('#submit').simulate('click');

  //Assert
  expect(isLoggedIn).toBeTruthy();
});
