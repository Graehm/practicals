const { MongoClient, ServerApiVersion } = require('mongodb');
const MONGO_URI = process.env.MONGO_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Go to CodeSandbox.io. Click "Create Sandbox" in the lower right corner. Choose the "Static" template. Create styles.css, and index.js files ready for you to work on and properly link them.

// Step 2: Set up the HTML structure
