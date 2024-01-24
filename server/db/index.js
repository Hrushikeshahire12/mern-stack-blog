const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
  
    "mongodb://127.0.0.1:27017"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));