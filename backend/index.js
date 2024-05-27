import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";

var app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

app.use(express.json());

const URI = process.env.MongoDbURI;

try {
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// define routes
app.use("/book", bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`app listen on port number is : ${PORT}`);
});
