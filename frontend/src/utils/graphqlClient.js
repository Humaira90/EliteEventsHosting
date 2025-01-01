import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:4000/graphql'); // Your GraphQL endpoint

export default client;
