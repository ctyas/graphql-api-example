
import { typeDefs } from 'graphql/schema';
import { ApolloServer, PubSub } from 'apollo-server';

const bootstrap = async () => {
  const server = new ApolloServer({
    typeDefs,
    context: {
      pubsub: new PubSub()
    },
  });

  server.listen().then(({ url, subscriptionsUrl }) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(`🚀 Subs ready at ${subscriptionsUrl}`);
  });
};

bootstrap();