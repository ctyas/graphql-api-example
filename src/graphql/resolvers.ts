import { helloResolver } from './resolvers/hello';
import { heartbeatResolver } from './resolvers/heartbeat';

export const resolvers = {
    Query: {
        ...helloResolver,
        ...heartbeatResolver
    }
};