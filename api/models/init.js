const mongoose = require("mongoose") // import mongoose module

// use promise
mongoose.Promise = global.Promise

// set mlab url which is form Heroku env varialbes
mongo_url = process.env.MLAB_URL

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Successfully connected to mongo database")
  })
  .catch(error => {
    console.error("Error connecting to MongoDB database", error)
  })

module.exports = mongoose
