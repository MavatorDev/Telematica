require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors= require('cors');
var bodyParser= require("body-parser")

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
const inicioRouter = require('./routes/inicio') // especificar que hay rutas que debe usar y manejar.
const usuarioRouter = require('./routes/usuario')
app.use('/inicio', inicioRouter)
app.use('/', usuarioRouter)

app.listen(3000, () => console.log('server started'))