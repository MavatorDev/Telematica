import React from 'react'

    const Dato = ({ datos }) => {
      return (
        <div>
              <table >
          
          
        
         
           
            <tr> <th><h2>Temperatura</h2></th>
            <th><h2>Temperatura</h2></th>
            <th><h2>Temperatura</h2></th>
            <th><h2>Temperatura</h2></th>
            <th><h2>Temperatura</h2></th>
                               
            </tr>     
            <td>
            { 
          datos.map((datos) => (
           
                <tr><h9 class="card-title">{datos.temperatura }</h9> </tr>             
              
          ))}
                  </td>        
            
                  <td>
            { 
          datos.map((datos) => (
           
                <tr><h9 class="card-title">{datos.humedad }</h9> </tr>             
              
          ))}
                  </td>
                  <td>
            { 
          datos.map((datos) => (
           
                <tr><h9 class="card-title">{datos.longitud }</h9> </tr>             
              
          ))}
                  </td>
                  <td>
            { 
          datos.map((datos) => (
           
                <tr><h9 class="card-title">{datos.latitud }</h9> </tr>             
              
          ))}
                  </td>
                  <td>
            { 
          datos.map((datos) => (
           
                <tr><h9 class="card-title">{datos.fecha }</h9> </tr>             
              
          ))}
                  </td>




          </table>
        </div>
      )
    };
    export default Dato