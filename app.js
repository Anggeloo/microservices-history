const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
require("dotenv").config();

const typeDefs = require("./src/models/schema");
const resolvers = require("./src/controllers/historyController");

const app = express();
app.use(cors());
app.use(express.json());

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor GraphQL corriendo en http://localhost:${PORT}/graphql`);
});
