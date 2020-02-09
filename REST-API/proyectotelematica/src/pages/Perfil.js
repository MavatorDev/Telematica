import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import Dato from '../components/Data.js'

class Perfil extends Component{
    constructor(){
        super()
        this.state={
            nombre: '',
            nickname: '',
            email:'',
            id:'',
            datoss:[]
        }
    }
    componentDidMount(){
        const token= localStorage.usertoken
        const decoded= jwt_decode(token)
        this.setState({
            id: decoded.id,
           nombre: decoded.nombre,
           nickname: decoded.nickname,
           email: decoded.email 
        })

        
        fetch('http://localhost:3000/inicio')
        .then(res => res.json())
        .then((data) => {
          this.setState({ datoss: data })
        })
        .catch(console.log)
    }    
    render(){
       
        return(
            <div className="contenedor">
                <div className="jumbotron mt -5">
                   <div className= "otro">
                       <h1 className="texto">
                           Perfil
                       </h1>
                       </div> 
                       <table className="tabla" >
                           <tbody>
                               <tr>
                                   <td></td>
                                   <td><h5>{this.state.nombre}</h5></td>
                               </tr>
                           </tbody>
                       </table>
                       <body>
                           <div id= 'datos'>
                           <Dato datos={this.state.datoss} />
                           </div>
                       </body>
                </div>
            </div>
        )
    }
}
export default Perfil