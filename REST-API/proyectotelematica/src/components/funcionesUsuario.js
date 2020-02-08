import axios from 'axios'

export const register = nuevoUsuario =>{
    return axios
        .post('http://localhost:3000/register', {
           nombre: nuevoUsuario.nombre,
           nickname: nuevoUsuario.nickname,
           contrasena: nuevoUsuario.contrasena,
           email:nuevoUsuario.email 
        })
        .then(res => {
            console.log('El usuario ha sido registrado')
        })
}

export const login = usuario => {
    return axios
    .post('http://localhost:3000/login', {
        email: usuario.email,
        contrasena:usuario.contrasena
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch (err => {
        console.log(err)
    })
}