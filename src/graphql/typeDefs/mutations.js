export default `
  type Mutation {
    saveName(name: String): Int!
    saveBirthDay(id: Int, birthDay: DATE!): String!
    saveResponse(id: Int, response: String!): String!
  }
`;
