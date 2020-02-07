import React, { Component } from 'react'
//import request from 'superagent'
import Dato from '../components/Data.js'

 

class Inicio extends Component {
  state={
    datoss:[]
  }
 
  componentDidMount () {
   /* request
      .post('http://localhost:3000/inicio')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ nickname: "nickname", temperatura: "temperatura", humedad: "humedad", latitud:"latitud",longitud:"longitud" })
      .end(function(err, res){        
      console.log(res.text);
      }); */

     
        fetch('http://localhost:3000/inicio')
        .then(res => res.json())
        .then((data) => {
          this.setState({ datoss: data })
        })
        .catch(console.log)
      
  }
  render() {
    
    return (
      <div id='pat'>
      <Dato datos={this.state.datoss} />
      </div>
    )

    
  }
  /*render() {
   

    
    return (
      
      <div>
        {this.state.loading ? <div>loading..</div> : <div>OMAIGA</div>}
         <h3> <p>Nickname</p></h3>
       
      <label>

      <fieldset><div>

      this.state.nickname[1 ]|| 'waiting for response...'}</div></fieldset>
      </label>

       <h3> <p>Temperatura</p></h3>
       <label>

      <fieldset><div>{this.state.nickname.length|| 'waiting for response...'}</div></fieldset>
      </label>
      <h3> <p>Humedad</p></h3>
      
      <label>

      <fieldset><div>{this.state.nickname[3 ]|| 'waiting for response...'}</div></fieldset>
      </label>
      <h3> <p>Latitud</p></h3>
      <label>

      <fieldset><div>{this.state.nickname[4 ]|| 'waiting for response...'}</div></fieldset>
      </label>
      <h3> <p>Longitud</p></h3>
      <label>

      <fieldset><div>{this.state.nickname[ 10 ]|| 'waiting for response...'}</div></fieldset>
      </label>     
     

    </div>
      
      
    );
    
  }*/
  
}

export default Inicio;
