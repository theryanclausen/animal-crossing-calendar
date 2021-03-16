import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';


export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_BFF,
  })
});