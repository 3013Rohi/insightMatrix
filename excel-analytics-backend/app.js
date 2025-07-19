const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
 

app.use(cors({
  origin: 'http://localhost:3000', // frontend origin
  credentials: true,  
}));
app.use(express.json());

 app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Welcome to Excel Analytics Backend API!");
});
 

module.exports = app;
