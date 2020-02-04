const mongoose = require('mongoose')

const inicioSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true
      },
      temperatura: {
        type: Number,
        required: true
      },
      humedad: {
        type: Number,
        required: true
      },
      latitud: {
        type: Number,
        required: true
      },
      longitud: {
        type: Number,
        required: true
      },
      fecha: {
        type: Date,
        required: true,
        default: Date.now
      }
})
module.exports = mongoose.model('Datoinicio', inicioSchema)