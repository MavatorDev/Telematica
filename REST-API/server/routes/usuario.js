const express = require('express')
const router = express.Router()
const inicio= require('../models/inicio')
const bcrypt= require('bcrypt')
const jwt= require("jsonwebtoken")
const UsuarioModel= require('../models/usuario')

process.env.SECRET_KEY= 'secret'



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
  
  
module.exports= router