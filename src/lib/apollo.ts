import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4t3xhhz2upc01zcgj5lcqza/master',
  cache: new InMemoryCache(),
});
