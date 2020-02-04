require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors= require('cors');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())
app.use(cors());

const inicioRouter = require('./routes/inicio') // especificar que hay rutas que debe usar y manejar.
app.use('/inicio', inicioRouter)


app.listen(3000, () => console.log('server started'))