import { Query } from './types/query';
import { types } from './types';
import gql from "graphql-tag";

const schemaDefinition = gql`
    schema {
        query: Query
    }`;

export const typeDefs = [
    schemaDefinition,
    Query,
    ...types
];