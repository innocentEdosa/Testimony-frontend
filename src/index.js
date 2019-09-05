import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { render } from 'react-dom';
import App from './container/App';
import apolloClient from './graphql/config';

render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>, document.getElementById('root'),
);
