const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const apiPort = 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())

const exerciseRouter = require('./routes/exercise.router')

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', exerciseRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))