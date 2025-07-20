import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://mongodb:50405040@cluster0.0uwzt4k.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
