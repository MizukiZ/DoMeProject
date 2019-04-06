const mongoose = require("mongoose") // import mongoose module

// use promise
mongoose.Promise = global.Promise

mongoose
  .connect("mongodb://localhost:27017/dome-database")
  .then(() => {
    console.log("Successfully connected to mongo database")
  })
  .catch(error => {
    console.error("Error connecting to MongoDB database", error)
  })

module.exports = mongoose
