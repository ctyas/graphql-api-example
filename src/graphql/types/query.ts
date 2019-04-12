import gql from "graphql-tag";

export const Query = gql`
    type Query {
        hello(name: String): String
        heartbeat: Boolean
    }
`;