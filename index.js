require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')


const app = express()

// Middlewares
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use('/images', express.static(path.join('images')))

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/upload'))
app.use('/transaction', require('./routes/transactionRouter'))


// Connect to mongodb
mongoose
    .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})