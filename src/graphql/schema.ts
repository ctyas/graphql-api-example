import { Query } from './types/query';
import { types } from './types';
import gql from "graphql-tag";
import { PubSub } from 'apollo-server';

export interface Subscription {
    pubsub: PubSub;
}

const schemaDefinition = gql`
    schema {
        query: Query
    }`;

export const typeDefs = [
    schemaDefinition,
    Query,
    ...types
];