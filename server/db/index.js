const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    // "mongodb+srv://sangammukherjee2022:sangammukherjee2023@cluster0.uulyk4o.mongodb.net/"
    "mongodb://127.0.0.1:27017"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));