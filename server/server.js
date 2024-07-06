const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { chats } = require('./data/data')

dotenv.config()
const PORT = process.env.PORT || 5000

app.use('/', (req, res) => {
  res.send(chats)
})



app.listen(PORT, console.log(`Server started on PORT:${PORT}`))