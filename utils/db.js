const mongoose = require('mongoose');

MONGO_URI =
  "mongodb+srv://tomsebastiantom:QWERTY123a@cluster0.66kzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
const connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) =>
      console.error(`Could not connect to MongoDB...  and the error is ${err}`)
    );
};

module.exports = connect;