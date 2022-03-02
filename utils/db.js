const mongoose = require('mongoose');

MONGO_URI =
"mongodb://localhost:27017/";
//"mongodb+srv://tomsebastiantom:QWERTY123a@cluster1.66kzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
const connect = () => {
  mongoose
    .connect(MONGO_URI,{autoIndex: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) =>
      console.error(`Could not connect to MongoDB...  and the error is ${err}`)
    );
};

module.exports = connect;