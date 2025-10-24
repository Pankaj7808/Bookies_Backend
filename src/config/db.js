import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URI;
console.log(uri)
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const db = client.db("bookies");
    const collection = db.collection("test"); // example collection
    const docs = await collection.find({}).toArray();
    console.log(docs);

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

run();
