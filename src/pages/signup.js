import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import Button from '../components/Button';
import UserForm from '../components/UserForm';

const SIGNUP_USER = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) {
        signUp( username: $username, email: $email, password: $password)
    }
`;


const SignUp = props => {

const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
      onCompleted: data => {
          localStorage.setItem('token', data.signUp);
          client.writeData({ data: { isLoggedIn: true } });
          props.history.push('/');
      }
  })

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    document.title = 'Sign up - Notedly';
  });

  return (
    <React.Fragment>
        <UserForm action={signUp} formType="signup" />
        {loading && <p>Loading...</p>}
        {error && <p>Error creating an account!</p>}
    </React.Fragment>
  );
};

export default SignUp;
