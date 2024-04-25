const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

app.get('/', (req, res) =>{
    res.send("hello");
});
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const bookCollections = client.db("BookInventory").collection("books");

    app.post("/upload-book", async(req, res) => {
        try {
            const data = req.body;
            const result = await bookCollections.insertOne(data);
            res.send(result);
        } catch (error) {
            console.error("Error inserting book:", error);
            res.status(500).send("Error inserting book");
        }
    });

    //http://localhost:5000/all-books
    app.get("/all-books", async(req, res) =>{
      const books =  bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    })

    //update a book data : use patch or update method
    app.patch("/book/:id", async(req, res) => {
      const id = req.params.id;
      console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
  
      const updateDoc = {
          $set: {
              ...updateBookData
          }
      };
  
      try {
          const result = await bookCollections.updateOne(filter, updateDoc, options);
          res.send(result);
      } catch (error) {
          console.error("Error updating book:", error);
          res.status(500).send("Error updating book");
      }
  });

  //delete a book data
  app.delete("/book/:id", async(req, res) =>{
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await bookCollections.deleteOne(filter);
    res.send(result);
  })


  //find by category  :: http://localhost:5000/all-books?category=Gothic%20Fiction
  app.get("/all-books", async (req, res) => {
    let query = {};
    if (req.query?.category) {
        query = {category: req.query.category };
    }
    try {
        const result = await bookCollections.find(query).toArray();
        res.send(result);
    } catch (error) {
        console.error("Error retrieving book:", error);
        res.status(500).send("Error retrieving book");
    }
});

//to get single book data

  app.get("/book/:id", async(req,res) =>{
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)}
    const result = await bookCollections.findOne(filter);
    res.send(result);
  })




    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}....`);
});
