const express = require("express") // import express module
const bodyParser = require("body-parser") // import body-parser module

const server = express()
const port = 8000

// set bodyParser to use
server.use(bodyParser.json())

// router
server.use([require("./routes/tasks")])

server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

server.listen(port, error => {
  if (error) {
    console.error("Server connection fail", error)
  } else {
    console.log(`Server started on port ${port}`)
  }
})
