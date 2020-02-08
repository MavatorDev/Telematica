import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 


 
import Inicio from "./pages/inicio";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil"

 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
 
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Inicio} />
            <Route exact path= "/perfil" component= {Perfil}/>
          </Switch>
 
          
        </div>
      </Router>
    );
  }
}
 
export default App;