const express = require('express')
const router = express.Router()
const inicio= require('../models/inicio')
const bcrypt= require('bcrypt')
const jwt= require("jsonwebtoken")
const UsuarioModel= require('../models/usuario')

process.env.SECRET_KEY= 'secret'

// Get all subscribers
/*router.get('/user', async(req, res) => {
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
})*/

// Create one subscriber
router.post('/register',  (req, res) => {
  const userdata = /*new usuario(*/{
    nombre: req.body.nombre,
    nickname: req.body.nickname,
    contrasena: req.body.contrasena,
    email: req.body.email
    
  }
  UsuarioModel.findOne({
    email:req.body.email
  })
  .then( usuario=> {
    if(!usuario){
      bcrypt.hash(req.body.contrasena,10,(err,hash)=>{
        userdata.contrasena= hash
        UsuarioModel.create(userdata)
        .then(usuario => {
          res.json({status:usuario.email + ' registrado'})
        })
        .catch(err => {
          res.status(401).send({
            error: "Es necesario el token de autenticación"
          })
        })
      })
    }else{
      res.status(401).send({
        error: "Es necesario el token de autenticación"
      })
    }
  })
  .catch(err => {
    res.status(401).send({
      error: "Es necesario el token de autenticación"
    })
  })
  })



  router.post('/login', (req, res)=>{
    UsuarioModel.findOne(
      {
        email:req.body.email,
        
      }
    )
    .then(usuario =>{
      if(usuario){
        if(bcrypt.compareSync(req.body.contrasena, usuario.contrasena)){
          const payload = {
           id: usuario.id,
           nombre: usuario.nombre,
           nickname: usuario.nickname,
           email: usuario.email

          }
          let token = jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn: 60 * 60 * 0.5
          })
          res.send(token)
        }else{
          res.status(401).json({error: "INV"})
        }
      }else{
        res.status(401).json({error: "NE"})
      }
    })
    .catch(err =>{
      res.status(401).send('no user exists in db to update'+err);
      //res.send('error: ' + err)
    })
  })
  
  /*
    try {
      const newDatousuario = await datosusuario.save()
      res.status(201).json(newDatousuario)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
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
  }*/
module.exports= router