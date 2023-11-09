
import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = "mongodb+srv://emiliogalimberty:DykCvZgFNarwXjFG@starwarsclusterapi.xhvj1ul.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const run = async() => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    // Provide the name of the database and collection you want to use.
    // If the database and/or collection do not exist, the driver and Atlas
    // will create them automatically when you first write data.
    const dbName = "myDatabase";
    const collectionName = "recipes";

    // Create references to the database and collection in order to run
    // operations on them.
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

  }
  catch (error) {
    console.log("error!!", error)
}
// finally {
//     // Ensures that the client will close when you finish/error
//    await client.close();
   
//   }
}
run().catch(console.dir);