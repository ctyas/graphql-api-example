
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { ApolloServer } from 'apollo-server';

const bootstrap = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

bootstrap();