const express = require("express");
const app = express();
const connectDB = require('./utils/db');
const searchs = require("./routes/searchs");
app.use("/search", searchs);


connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
