import ApolloClient from "apollo-boost"
 
const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-truthlightning-355/gql-examples-1/dev" })
 
export { client }