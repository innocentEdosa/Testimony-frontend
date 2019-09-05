import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import getToken from '../helpers/getToken';

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: process.env.BACKEND,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const link = authLink.concat(httpLink);
const client = new ApolloClient({
  cache,
  link,
});

export default client;
