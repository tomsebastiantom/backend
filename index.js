const express = require("express");
const app = express();
const mongoose = require("mongoose");
const searchs = require("./routes/searchs");
app.use("/search", searchs);

MONGO_URI =
  "mongodb+srv://tomsebastiantom:QWERTY123a@cluster0.66kzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) =>
    console.error(`Could not connect to MongoDB...  and the error is ${err}`)
  );
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
