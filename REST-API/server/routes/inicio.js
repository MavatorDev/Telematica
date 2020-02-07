const express = require('express')
const router = express.Router()
const inicio= require('../models/inicio')
const bcrypt= require('bcrypt')
const jwt= require("jsonwebtoken")
const Usuario= require('../models/usuario')

process.env.SECRET_HEY= 'secret'

// Get all subscribers
router.get('/user', async(req, res) => {
    try {
        var datosusuario = await usuario.find()
           
        res.json(datosusuario)
        
        
    } catch (err) {
        res.status(500).json({ message: err.message })
      }
 })

// Get one subscriber
router.get('/user/:id', getDatosusuario,(req, res) => {
    res.json(res.datousuario)
})

router.post('/register',  (req, res) => {
  const userdata = /*new usuario(*/{
    nombre: req.body.nombre,
    nickname: req.body.nickname,
    contrasena: req.body.contrasena,
    email: req.body.email
    
  }
  Usuario.findOne({
    email:req.body.email
  })
  .then( usuario=> {
    if(!usuario){
      bcrypt.hash(req.body.contrasena,10,(err,hash)=>{
        userdata.contrasena= hash
        Usuario.create(userdata)
        .then(usuario => {
          res.json({status:usuario.nickname+ ' registrado'})
        })
        .catch(err => {
          res.send('error: '+err)
        })
      })
    }else{
      res.json({error: 'El usuario ya sse encuentra registrado'})
    }
  })
  .catch(err => {
    res.send('error:' + err)
  })
  })

// Update one subscriber
router.patch('/user/:id', getDatosusuario, async (req, res) => {
    if (req.body.nombre != null) {
      res.datousuario.nombre = req.body.nombre
    }
  
    if (req.body.nickname != null) {
      res.datousuario.nickname = req.body.nickname
    }
    if (req.body.contrasena != null) {
        res.datousuario.contrasena = req.body.contrasena
      }
      if (req.body.email != null) {
        res.datousuario.email = req.body.email
      }
      
    try {
      const updateddatousuario = await res.datousuario.save()
      res.json(updateddatousuario)
    } catch(err) {
      res.status(400).json({ message: err.message })
    }
  
  })

// Delete one subscriber
router.delete('/user/:id', getDatosusuario, async (req, res) => {
    try {
        await res.datousuario.remove()
        res.json({ message: 'Deleted This data' })
      } catch(err) {
        res.status(500).json({ message: err.message })
      }
})


async function getDatosusuario(req, res, next) {
    try {
      datousuario = await usuario.findById(req.params.id)
      if (datousuario == null) {
        return res.status(404).json({ message: 'Cant find data'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.datousuario = datousuario
    next()
  }

// Get all subscribers
router.get('/', async(req, res) => {
    try {
        var datosInicio = await inicio.find()
             
        res.json(datosInicio)
        
    } catch (err) {
        res.status(500).json({ message: err.message })
      }
 })

// Get one subscriber
router.get('/:id', getDatosInicio,(req, res) => {
    res.json(res.datoInicio)
})

// Create one subscriber
router.post('/', async (req, res) => {
    const datosInicio = new inicio({
      nickname: req.body.nickname,
      temperatura: req.body.temperatura,
      humedad: req.body.humedad,
      latitud: req.body.latitud,
      longitud: req.body.longitud
    })
  
    try {
      const newDatoInicio = await datosInicio.save()
      res.status(201).json(newDatoInicio)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

// Update one subscriber
router.patch('/:id', getDatosInicio, async (req, res) => {
    if (req.body.nickname != null) {
      res.datoInicio.nickname = req.body.nickname
    }
  
    if (req.body.temperatura != null) {
      res.datoInicio.temperatura = req.body.temperatura
    }
    if (req.body.humedad != null) {
        res.datoInicio.humedad = req.body.humedad
      }
      if (req.body.latitud != null) {
        res.datoInicio.latitud = req.body.latitud
      }
      if (req.body.longitud != null) {
        res.datoInicio.longitud = req.body.longitud
      }
    try {
      const updateddatoInicio = await res.datoInicio.save()
      res.json(updateddatoInicio)
    } catch(err) {
      res.status(400).json({ message: err.message })
    }
  
  })

// Delete one subscriber
router.delete('/:id', getDatosInicio, async (req, res) => {
    try {
        await res.datoInicio.remove()
        res.json({ message: 'Deleted This data' })
      } catch(err) {
        res.status(500).json({ message: err.message })
      }
})


async function getDatosInicio(req, res, next) {
    try {
      datoInicio = await inicio.findById(req.params.id)
      if (datoInicio == null) {
        return res.status(404).json({ message: 'Cant find data'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.datoInicio = datoInicio
    next()
  }

module.exports = router
