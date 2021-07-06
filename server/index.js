const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
	.connect(MONGODB, { useNewUrlParser: true })
	.then(() => server.listen({ port: 5000 }))
	.then(res => {
		console.log(`server running at ${res.url}`);
	});
