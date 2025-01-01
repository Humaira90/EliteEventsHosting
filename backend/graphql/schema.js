import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLID } from 'graphql';
import { Portfolio } from '../models/portfolioModel.js';

// Portfolio Type
const PortfolioType = new GraphQLObjectType({
  name: 'Portfolio',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
   
  }),
});

// Root Query for fetching portfolios
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    portfolios: {
      type: new GraphQLList(PortfolioType),
      resolve() {
        return Portfolio.find(); // Fetch all portfolios from the database
      },
    },
  },
});

// Mutation for adding a portfolio item
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPortfolio: {
      type: PortfolioType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
      },
      resolve(parent, args) {
        const portfolio = new Portfolio({
          title: args.title,
          description: args.description,
          image: args.image,
        });
        return portfolio.save(); // Save the portfolio item to the database
      },
    },
  },
});

// Create schema
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
