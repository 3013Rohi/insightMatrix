 
const dotenv = require("dotenv");
dotenv.config(); 
console.log("DEBUG MONGO_URI:", process.env.MONGO_URI);

const app = require("./app");
const connectDB = require("./config/db");
const express=require("express");

 
connectDB();   // Connect to MongoDB
    
 
 
 

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
