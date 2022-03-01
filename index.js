const express = require("express");
const app = express();
const connectDB = require('./utils/db');
const searchs = require("./routes/searchs");
app.use("/search", searchs);


connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
