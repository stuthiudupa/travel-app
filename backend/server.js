const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeurls = require('./routes/route')
const cors = require('cors')

dotenv.config()

mongoose.connect("mongodb+srv://millet:stusri123@cluster0.tanptii.mongodb.net/shippingAddress?retryWrites=true&w=majority",()=>console.log("Database Connected"))

app.use(express.json())
app.use(cors())
app.use('/',routeurls)
app.listen(4000,()=>console.log("server is running on port 4000"))