import { MongoClient } from "mongodb";

const uri = "mongodb+srv://pj:hav33nD.@cluster0.zfrg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    // Choose database (if not specified, defaults to "test")
    const db = client.db("myDatabaseName");


  } finally {
    await client.close();
  }
}

run().catch(console.dir);
