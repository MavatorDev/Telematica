const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
  
      nombre: {
        type: String,
        required: true
      },
      nickname: {
        type: String,
        required: true
      },
      contrasena: {
        type: String,
        required: true,
        select: false
      },
      
      email: {
        type: String,
        required: true
      },
      
      fecha: {
        type: Date,
        required: true,
        default: Date.now
      }
})
module.exports = mongoose.model('usuario', usuarioSchema)