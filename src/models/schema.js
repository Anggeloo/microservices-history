const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type History {
    history_id: ID!
    user_code: String!
    history_action: String
    created_at: String
    updated_at: String
  }

  type ApiResponse {
    status: String!
    data: [History]
    message: String!
  }

  type Mutation {
    addHistory(user_code: String!, history_action: String!): ApiResponse
  }

  type Query {
    getHistory: ApiResponse
  }
`;

module.exports = typeDefs;
