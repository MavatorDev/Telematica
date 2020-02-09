import React from 'react'


    const Dato = ({ datos }) => {
      return (
        <div>
              <table >
          
          
        
         
           
            <tbody> <tr>
            <th><h2>nickname</h2></th>
            <th><h2>Tmeperatura</h2></th>
            <th><h2>Humedad</h2></th>
            <th><h2>Longitud</h2></th>
            <th><h2>Latitud</h2></th>
                               
            </tr></tbody>     
            <td>
            { 
          datos.map((datos) => (
           
                <tbody><h9 class="card-title">{datos.temperatura }</h9> </tbody>             
              
          ))}
                  </td>        
            
                  <td>
            { 
          datos.map((datos) => (
           
                <tbody><h9 class="card-title">{datos.humedad }</h9> </tbody>             
              
          ))}
                  </td>
                  <td>
            { 
          datos.map((datos) => (
           
                <tbody><h9 class="card-title">{datos.longitud }</h9> </tbody>             
              
          ))}
                  </td>
                  <td>
            { 
          datos.map((datos) => (
           
                <tbody><h9 class="card-title">{datos.latitud }</h9> </tbody>             
              
          ))}
                  </td>
                  <td>
            { 
          datos.map((datos) => (
           
                <tbody><h9 class="card-title">{datos.fecha }</h9> </tbody>             
              
          ))}
                  </td>




          </table>
        </div>
      )
    };
    export default Dato